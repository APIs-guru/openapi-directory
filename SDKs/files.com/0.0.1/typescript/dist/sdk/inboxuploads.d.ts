import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InboxUploads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInboxUploads - List Inbox Uploads
     *
     * List Inbox Uploads
    **/
    getInboxUploads(req: operations.GetInboxUploadsRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxUploadsResponse>;
}
