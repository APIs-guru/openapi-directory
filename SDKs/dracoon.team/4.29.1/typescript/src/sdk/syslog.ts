import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Syslog {
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
   * requestAuditNodeUserDataSyslog - Request nodes assigned users with permissions
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
   * 
   * ### Description: 
   * Retrieve a list of all nodes of type room, and the room assignment users with permissions.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.
   * 
   * ### Postcondition:
   * List of rooms and their assigned users is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`  
   * Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
   * | `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
   * | `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
   * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
   * | `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
   * | `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
   * | `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
   * | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
   * | `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
   * | `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |
   * 
   * </details>
   * 
   * ### Deprecated filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort fields are supported.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `nodeName:asc`  
   * Sort by `nodeName` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `nodeId` | Node ID |
   * | `nodeName` | Node name |
   * | `nodeParentId` | Node parent ID |
   * | `nodeSize` | Node size |
   * | `nodeQuota` | Node quota |
   * 
   * </details>
  **/
  requestAuditNodeUserDataSyslog(
    req: operations.RequestAuditNodeUserDataSyslogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestAuditNodeUserDataSyslogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestAuditNodeUserDataSyslogRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/syslog/audits/nodes";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestAuditNodeUserDataSyslogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auditNodeResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestLogOperationsSyslog - Request allowed log operations
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
   * 
   * ### Description: 
   * Retrieve eventlog (audit log) operation IDs and the associated log operation description.
   * 
   * ### Precondition:
   * Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
   * 
   * ### Postcondition:
   * List of available log operations is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestLogOperationsSyslog(
    req: operations.RequestLogOperationsSyslogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestLogOperationsSyslogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestLogOperationsSyslogRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/syslog/operations";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestLogOperationsSyslogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.logOperationList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestSyslogEvents - Request system events
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.3.0</h3>
   * 
   * ### Description: 
   * Retrieve eventlog (audit log) events.
   * 
   * ### Precondition:
   * Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
   * 
   * ### Postcondition:
   * List of audit log events is returned.
   * 
   * ### Further Information:
   * Output is limited to **500** entries.  
   * For more results please use filter criteria and paging (`offset` + `limit`). 
   * 
   * Allowed `Accept-Header`:
   * * `Accept: application/json`
   * * `Accept: text/csv`  
   * 
   * ---
   * 
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort fields are supported.  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `time:desc`  
   * Sort by `time` descending (default sort option).
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `time` | Event timestamp |
   * 
   * </details>
  **/
  requestSyslogEvents(
    req: operations.RequestSyslogEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSyslogEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSyslogEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/syslog/events";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestSyslogEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.syslogEventList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
