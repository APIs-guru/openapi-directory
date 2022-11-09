import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetUuid(req: operations.GetUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetUuidResponse>;
    GetUuidVersionVersion(req: operations.GetUuidVersionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetUuidVersionVersionResponse>;
    PostUuid(req: operations.PostUuidRequest, config?: AxiosRequestConfig): Promise<operations.PostUuidResponse>;
}
export {};
