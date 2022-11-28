import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Monitors {
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
   * allMonitors - All Monitors
   *
   * The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.
   * 
   * The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  allMonitors(
    config?: AxiosRequestConfig
  ): Promise<operations.AllMonitorsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/monitors";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AllMonitorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allMonitors200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createMonitor - Create Monitor
   *
   * This endpoint allows you to create a monitor.
   * 
   * Some sample `cron` values are:
   * 
   * | Frequency                  | Cron Pattern   |
   * |-----------------------|----------------|
   * | Every 5 minutes       | `* /5 * * * *`  |
   * | Every 30 minutes     | `* /30 * * * *` |
   * | Every Hour         | `0 * /1 * * *`  |
   * | Every 6 Hours      | `0 * /6 * * *`  |
   * | Every day at 5pm    | `0 17 * * *`   |
   * | Every Monday at 12pm  | `0 12 * * MON` |
   * | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
   * 
   * Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 
   * 
   * For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * 
   * You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.
   * 
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  createMonitor(
    req: operations.CreateMonitorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMonitorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMonitorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/monitors";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.CreateMonitorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createMonitor200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createMonitor400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteMonitor - Delete Monitor
   *
   * This endpoint can be used to delete an existing monitor using its `uid`.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  deleteMonitor(
    req: operations.DeleteMonitorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMonitorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMonitorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/monitors/{monitor_uid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMonitorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteMonitor200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteMonitor404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * runAMonitor - Run a Monitor
   *
   * This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  runAMonitor(
    req: operations.RunAMonitorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RunAMonitorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RunAMonitorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/monitors/{monitor_uid}/run", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RunAMonitorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runAMonitor200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * singleMonitor - Single Monitor
   *
   * This endpoint fetches you basic information about the monitor using its `uid`.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  singleMonitor(
    req: operations.SingleMonitorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SingleMonitorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SingleMonitorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/monitors/{monitor_uid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SingleMonitorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.singleMonitor200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.singleMonitor404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateMonitor - Update Monitor
   *
   * This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.
   * 
   * Some example `cron` values are:
   * 
   * | Frequency                  | Cron Pattern   |
   * |-----------------------|----------------|
   * | Every 5 minutes       | `* /5 * * * *`  |
   * | Every 30 minutes     | `* /30 * * * *` |
   * | Every Hour         | `0 * /1 * * *`  |
   * | Every 6 Hours      | `0 * /6 * * *`  |
   * | Every day at 5pm    | `0 17 * * *`   |
   * | Every Monday at 12pm  | `0 12 * * MON` |
   * | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
   * 
   * Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. 
   * 
   * For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
  **/
  updateMonitor(
    req: operations.UpdateMonitorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMonitorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMonitorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/monitors/{monitor_uid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateMonitorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateMonitor200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
