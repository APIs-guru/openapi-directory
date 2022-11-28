import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://elmah.io"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deploymentsCreate - Create a new deployment.
    **/
    deploymentsCreate(req: operations.DeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentsCreateResponse>;
    /**
     * deploymentsDelete - Delete a deployment by its ID.
     *
     * This endpoint doesn't clear the version number of messages already annotated with this deployment version.
    **/
    deploymentsDelete(req: operations.DeploymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentsDeleteResponse>;
    /**
     * deploymentsGet - Fetch a deployment by its ID.
    **/
    deploymentsGet(req: operations.DeploymentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentsGetResponse>;
    /**
     * deploymentsGetAll - Fetch a list of deployments.
    **/
    deploymentsGetAll(config?: AxiosRequestConfig): Promise<operations.DeploymentsGetAllResponse>;
    /**
     * heartbeatsCreate - Create a new heartbeat.
    **/
    heartbeatsCreate(req: operations.HeartbeatsCreateRequest, config?: AxiosRequestConfig): Promise<operations.HeartbeatsCreateResponse>;
    /**
     * logsCreate - Create a new log.
    **/
    logsCreate(req: operations.LogsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LogsCreateResponse>;
    /**
     * logsDisable - Disable a log by its ID.
    **/
    logsDisable(req: operations.LogsDisableRequest, config?: AxiosRequestConfig): Promise<operations.LogsDisableResponse>;
    /**
     * logsEnable - Enable a log by its ID.
    **/
    logsEnable(req: operations.LogsEnableRequest, config?: AxiosRequestConfig): Promise<operations.LogsEnableResponse>;
    /**
     * logsGet - Fetch a log by its ID.
    **/
    logsGet(req: operations.LogsGetRequest, config?: AxiosRequestConfig): Promise<operations.LogsGetResponse>;
    /**
     * logsGetAll - Fetch a list of logs.
    **/
    logsGetAll(config?: AxiosRequestConfig): Promise<operations.LogsGetAllResponse>;
    /**
     * messagesCreate - Create a new message.
    **/
    messagesCreate(req: operations.MessagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MessagesCreateResponse>;
    /**
     * messagesCreateBulk - Create one or more new messages.
    **/
    messagesCreateBulk(req: operations.MessagesCreateBulkRequest, config?: AxiosRequestConfig): Promise<operations.MessagesCreateBulkResponse>;
    /**
     * messagesDelete - Delete a message by its ID.
    **/
    messagesDelete(req: operations.MessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteResponse>;
    /**
     * messagesDeleteAll - Deletes a list of messages by logid and query.
    **/
    messagesDeleteAll(req: operations.MessagesDeleteAllRequest, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteAllResponse>;
    /**
     * messagesFix - Fix a message by its ID.
    **/
    messagesFix(req: operations.MessagesFixRequest, config?: AxiosRequestConfig): Promise<operations.MessagesFixResponse>;
    /**
     * messagesGet - Fetch a message by its ID.
    **/
    messagesGet(req: operations.MessagesGetRequest, config?: AxiosRequestConfig): Promise<operations.MessagesGetResponse>;
    /**
     * messagesGetAll - Fetch messages from a log.
    **/
    messagesGetAll(req: operations.MessagesGetAllRequest, config?: AxiosRequestConfig): Promise<operations.MessagesGetAllResponse>;
    /**
     * messagesHide - Hide a message by its ID.
    **/
    messagesHide(req: operations.MessagesHideRequest, config?: AxiosRequestConfig): Promise<operations.MessagesHideResponse>;
    /**
     * sourceMapsCreateOrUpdate - Create or update a translation between a minified JavaScript path to the minified JavaScript and source map files.
    **/
    sourceMapsCreateOrUpdate(req: operations.SourceMapsCreateOrUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SourceMapsCreateOrUpdateResponse>;
    /**
     * uptimeChecksGetAll - Fetch a list of uptime checks. Currently in closed beta. Get in contact to get access to this endpoint.
    **/
    uptimeChecksGetAll(config?: AxiosRequestConfig): Promise<operations.UptimeChecksGetAllResponse>;
}
export {};
