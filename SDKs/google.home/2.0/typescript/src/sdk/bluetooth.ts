import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Bluetooth {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * changeDiscoverability - Change Discoverability
   *
   * *See note for Bluetooth under `/setup/bluetooth/status`*
   * 
   * **For Part 1 only**
   * 
   * This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
  **/
  changeDiscoverability(
    req: operations.ChangeDiscoverabilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChangeDiscoverabilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChangeDiscoverabilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/discovery";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ChangeDiscoverabilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * forgetpaireddevice - Forget paired device
   *
   * *See note for Bluetooth under `/setup/bluetooth/status`*
   * 
   * **For both parts**
   * 
   * This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
  **/
  forgetpaireddevice(
    req: operations.ForgetpaireddeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ForgetpaireddeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ForgetpaireddeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/bond";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ForgetpaireddeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPairedDevices - Get Paired Devices
   *
   * *See note for Bluetooth under `/setup/bluetooth/status`*
   * 
   * **For both parts**
   * 
   * This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
  **/
  getPairedDevices(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPairedDevicesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/get_bonded";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPairedDevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example111s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getScanResults - Get Scan Results
   *
   * *See note for Bluetooth under `/setup/bluetooth/status`*
   * 
   * **For Part 2 only**
   * 
   * This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.
   * 
   * `rssi` is signal strength, `name` is name, `mac_address` is mac address.  
   * `device_class` and `device_type` are bluetooth codes.  
   * 
   * The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.
  **/
  getScanResults(
    config?: AxiosRequestConfig
  ): Promise<operations.GetScanResultsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/scan_results";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetScanResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example112s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pairwithSpeaker - Pair with Speaker
   *
   * *See note for Bluetooth under `/setup/bluetooth/status`*
   * 
   * **For Part 2 only**
   * 
   * This pairs with other bluetooth speakers by mac address.
  **/
  pairwithSpeaker(
    req: operations.PairwithSpeakerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PairwithSpeakerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PairwithSpeakerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/connect";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PairwithSpeakerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scanfordevices - Scan for devices
   *
   * *See note for Bluetooth under `/setup/bluetooth/status`*
   * 
   * **For Part 2 only**
   * 
   * This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
   * To get the scan results, see /setup/bluetooth/scan_results.
  **/
  scanfordevices(
    req: operations.ScanfordevicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScanfordevicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScanfordevicesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/scan";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScanfordevicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * status - Status
   *
   * > **There are 2 parts of Bluetooth.**
   * >
   * > *Part 1*: Devices like phones connect to Home and play audio through Home.  
   * > For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
   * >
   * > *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
   * > For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
   * >
   * > The other endpoints are common for both parts.
   * 
   * 
   * **For both parts**
   * 
   * This gives the status of all bluetooth things.
   * - Not sure what `audio_mode` is.
   * - `discovery_enabled` states whether Home is discoverable. (**Part 1**)
   * - `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
   * - `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
   * - `connected_devices` is a list of all speakers connected to Home. (**Part 2**)
  **/
  status(
    config?: AxiosRequestConfig
  ): Promise<operations.StatusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bluetooth/status";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example110 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
