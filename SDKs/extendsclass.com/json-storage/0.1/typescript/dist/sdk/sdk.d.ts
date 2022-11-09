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
    DeleteBinId(req: operations.DeleteBinIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBinIdResponse>;
    GetBinId(req: operations.GetBinIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBinIdResponse>;
    PatchBinId(req: operations.PatchBinIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBinIdResponse>;
    PostBin(config?: AxiosRequestConfig): Promise<operations.PostBinResponse>;
    PutBinId(req: operations.PutBinIdRequest, config?: AxiosRequestConfig): Promise<operations.PutBinIdResponse>;
}
export {};
