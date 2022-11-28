import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://firmalyzer.com/api/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * detectDeviceDetectPost - Detect iot device by service banners and mac address
   *
   * Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information
  **/
  detectDeviceDetectPost(
    req: operations.DetectDeviceDetectPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetectDeviceDetectPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetectDeviceDetectPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/device/detect";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
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
        const res: operations.DetectDeviceDetectPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deviceInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwareAccountsFirmwareFirmwareHashAccountsGet - Get default accounts and password hashes of a firmware
  **/
  firmwareAccountsFirmwareFirmwareHashAccountsGet(
    req: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/accounts", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.defaultAccounts = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet - Get default OS configuration issues of a device firmware
  **/
  firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet(
    req: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/config-issues", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configIssues = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet - Get expired digital certificates embedded in a device firmware
  **/
  firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet(
    req: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/expired-certs", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.expiredCerts = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet - Get private crypto keys embedded in a device firmware
  **/
  firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet(
    req: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/private-keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeys = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwareRiskFirmwareFirmwareHashRiskGet - Get iot device firmware risk analysis
  **/
  firmwareRiskFirmwareFirmwareHashRiskGet(
    req: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/risk", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.firmwareRisk = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
  **/
  firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet(
    req: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/weak-certs", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.weakCerts = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet - Get weak crypto keys with short length
  **/
  firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet(
    req: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/weak-keys", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cryptoKeys = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
