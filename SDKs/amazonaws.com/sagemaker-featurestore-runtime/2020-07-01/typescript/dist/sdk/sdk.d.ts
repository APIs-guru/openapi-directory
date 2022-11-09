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
    BatchGetRecord(req: operations.BatchGetRecordRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetRecordResponse>;
    DeleteRecord(req: operations.DeleteRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordResponse>;
    GetRecord(req: operations.GetRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordResponse>;
    PutRecord(req: operations.PutRecordRequest, config?: AxiosRequestConfig): Promise<operations.PutRecordResponse>;
}
export {};
