import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeBoulderEmails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchBoulderEmails - Search API for 'Boulder Council Emails' entry type
     *
     * API to search for entries of type Boulder Council Emails
    **/
    searchBoulderEmails(req: operations.SearchBoulderEmailsRequest, config?: AxiosRequestConfig): Promise<operations.SearchBoulderEmailsResponse>;
}
