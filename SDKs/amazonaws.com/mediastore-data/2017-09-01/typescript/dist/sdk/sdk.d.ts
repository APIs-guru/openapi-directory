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
    DeleteObject(req: operations.DeleteObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectResponse>;
    DescribeObject(req: operations.DescribeObjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObjectResponse>;
    GetObject(req: operations.GetObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectResponse>;
    ListItems(req: operations.ListItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListItemsResponse>;
    PutObject(req: operations.PutObjectRequest, config?: AxiosRequestConfig): Promise<operations.PutObjectResponse>;
}
export {};
