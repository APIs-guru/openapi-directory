import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tabledata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryTabledataInsertAll - Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
    **/
    bigqueryTabledataInsertAll(req: operations.BigqueryTabledataInsertAllRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTabledataInsertAllResponse>;
    /**
     * bigqueryTabledataList - Retrieves table data from a specified set of rows. Requires the READER dataset role.
    **/
    bigqueryTabledataList(req: operations.BigqueryTabledataListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTabledataListResponse>;
}
