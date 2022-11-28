import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Assistant {
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
   * accessibility - Accessibility
   *
   * This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
   * Sending an empty-body POST request returns the current values.  
   * Either of the fields or both can be sent and new values will be saved.
  **/
  accessibility(
    req: operations.AccessibilityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AccessibilityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AccessibilityRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assistant/a11y_mode";

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
        const res: operations.AccessibilityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getcurrentvalues = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * alarmVolume - Alarm Volume
   *
   * This gets and sets alarms and timers volume.  
   * **Note:** This is not the same as normal volume.
   * 
   * Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
   * Sending an empty body gets the volume. Sending `volume` sets the volume.
  **/
  alarmVolume(
    req: operations.AlarmVolumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AlarmVolumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AlarmVolumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assistant/alarms/volume";

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
        const res: operations.AlarmVolumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getvolume = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteAlarmsandTimers - Delete Alarms and Timers
   *
   * This deletes alarms and timers by their id.
   * 
   * `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
  **/
  deleteAlarmsandTimers(
    req: operations.DeleteAlarmsandTimersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAlarmsandTimersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAlarmsandTimersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assistant/alarms/delete";

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
        const res: operations.DeleteAlarmsandTimersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example19 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * doNotDisturb - Do Not Disturb
   *
   * This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
  **/
  doNotDisturb(
    req: operations.DoNotDisturbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DoNotDisturbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DoNotDisturbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assistant/notifications";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DoNotDisturbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getcurrentstate = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAlarmsandTimers - Get Alarms and Timers
   *
   * This gives a list of all active alarms and timers.
   * 
   * Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).
   * 
   * Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
   * `status` is 1 for set up and 2 for ringing.
   * 
   * Timers have `original_duration` is the original duration.  
   * `status` is 1 for set up and 3 for ringing.
  **/
  getAlarmsandTimers(
    config?: AxiosRequestConfig
  ): Promise<operations.GetAlarmsandTimersResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/assistant/alarms";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAlarmsandTimersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example18 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setEqualizerValues - Set Equalizer Values
   *
   * This can only set new equalizer values. To get already set values, use /setup/eureka_info.
   * 
   * The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
   * 
   * `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
   * 
   * Default values are 0 for both.  
   * While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
  **/
  setEqualizerValues(
    req: operations.SetEqualizerValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetEqualizerValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetEqualizerValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user_eq/set_equalizer";

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
        const res: operations.SetEqualizerValuesResponse = {statusCode: httpRes.status, contentType: contentType};
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

}
