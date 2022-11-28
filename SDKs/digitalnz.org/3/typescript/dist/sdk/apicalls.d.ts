import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiCalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRecordsFormat - Run queries against DigitalNZ metadata search service.
     *
     * This is the main search endpoint allowing queries against the records database.
    **/
    getRecordsFormat(req: operations.GetRecordsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsFormatResponse>;
    /**
     * getRecordsRecordIdJson - View metadata associated with a single record.
     *
     * If you know its `record_id` you can use this endpoint to view all metadata associated with that specific record.
     *
    **/
    getRecordsRecordIdJson(req: operations.GetRecordsRecordIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsRecordIdJsonResponse>;
}
