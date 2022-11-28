import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Health {
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
   * healthGet - Get HTTP
   *
   * Check the Appwrite HTTP server is up and responsive.
  **/
  healthGet(
    req: operations.HealthGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetAntiVirus - Get Anti virus
   *
   * Check the Appwrite Anti Virus server is up and connection is successful.
  **/
  healthGetAntiVirus(
    req: operations.HealthGetAntiVirusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetAntiVirusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetAntiVirusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/anti-virus";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetAntiVirusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetCache - Get Cache
   *
   * Check the Appwrite in-memory cache server is up and connection is successful.
  **/
  healthGetCache(
    req: operations.HealthGetCacheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetCacheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetCacheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/cache";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetCacheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetDb - Get DB
   *
   * Check the Appwrite database server is up and connection is successful.
  **/
  healthGetDb(
    req: operations.HealthGetDbRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetDbResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetDbRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/db";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetDbResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetQueueCertificates - Get Certificate Queue
   *
   * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
  **/
  healthGetQueueCertificates(
    req: operations.HealthGetQueueCertificatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetQueueCertificatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetQueueCertificatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/queue/certificates";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetQueueCertificatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetQueueFunctions - Get Functions Queue
  **/
  healthGetQueueFunctions(
    req: operations.HealthGetQueueFunctionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetQueueFunctionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetQueueFunctionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/queue/functions";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetQueueFunctionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetQueueLogs - Get Logs Queue
   *
   * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
  **/
  healthGetQueueLogs(
    req: operations.HealthGetQueueLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetQueueLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetQueueLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/queue/logs";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetQueueLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetQueueTasks - Get Tasks Queue
   *
   * Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.
  **/
  healthGetQueueTasks(
    req: operations.HealthGetQueueTasksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetQueueTasksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetQueueTasksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/queue/tasks";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetQueueTasksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetQueueUsage - Get Usage Queue
   *
   * Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.
  **/
  healthGetQueueUsage(
    req: operations.HealthGetQueueUsageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetQueueUsageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetQueueUsageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/queue/usage";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetQueueUsageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetQueueWebhooks - Get Webhooks Queue
   *
   * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
  **/
  healthGetQueueWebhooks(
    req: operations.HealthGetQueueWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetQueueWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetQueueWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/queue/webhooks";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetQueueWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetStorageLocal - Get Local Storage
   *
   * Check the Appwrite local storage device is up and connection is successful.
  **/
  healthGetStorageLocal(
    req: operations.HealthGetStorageLocalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetStorageLocalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetStorageLocalRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/storage/local";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetStorageLocalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * healthGetTime - Get Time
   *
   * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
  **/
  healthGetTime(
    req: operations.HealthGetTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HealthGetTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HealthGetTimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health/time";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.HealthGetTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
