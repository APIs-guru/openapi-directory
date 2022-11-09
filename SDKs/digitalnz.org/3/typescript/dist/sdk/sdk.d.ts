import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * This is the main search endpoint allowing queries against the records database.
    **/
    GetRecordsFormat(req: operations.GetRecordsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsFormatResponse>;
    /**
     * If you know its `record_id` you can use this endpoint to view all metadata associated with that specific record.
     *
    **/
    GetRecordsRecordIdJson(req: operations.GetRecordsRecordIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordsRecordIdJsonResponse>;
}
export {};
