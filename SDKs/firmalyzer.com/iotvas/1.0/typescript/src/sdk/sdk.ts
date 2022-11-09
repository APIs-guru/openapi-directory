import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // DetectDeviceDetectPost - Detect iot device by service banners and mac address
  /** 
   * Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information
  **/
  DetectDeviceDetectPost(
    req: operations.DetectDeviceDetectPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetectDeviceDetectPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetectDeviceDetectPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/device/detect";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DetectDeviceDetectPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deviceInfo = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwareAccountsFirmwareFirmwareHashAccountsGet - Get default accounts and password hashes of a firmware
  FirmwareAccountsFirmwareFirmwareHashAccountsGet(
    req: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/accounts", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.defaultAccounts = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet - Get default OS configuration issues of a device firmware
  FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet(
    req: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/config-issues", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.configIssues = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet - Get expired digital certificates embedded in a device firmware
  FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet(
    req: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/expired-certs", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.expiredCerts = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet - Get private crypto keys embedded in a device firmware
  FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet(
    req: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/private-keys", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cryptoKeys = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwareRiskFirmwareFirmwareHashRiskGet - Get iot device firmware risk analysis
  FirmwareRiskFirmwareFirmwareHashRiskGet(
    req: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/risk", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.firmwareRisk = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGet - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
  FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGet(
    req: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/weak-certs", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.weakCerts = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGet - Get weak crypto keys with short length
  FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGet(
    req: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/firmware/{firmware_hash}/weak-keys", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cryptoKeys = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
