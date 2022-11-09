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
    DeleteRiddle(req: operations.DeleteRiddleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRiddleResponse>;
    GetRiddle(req: operations.GetRiddleRequest, config?: AxiosRequestConfig): Promise<operations.GetRiddleResponse>;
    GetRiddleRandom(req: operations.GetRiddleRandomRequest, config?: AxiosRequestConfig): Promise<operations.GetRiddleRandomResponse>;
    GetRiddleSearch(req: operations.GetRiddleSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetRiddleSearchResponse>;
    PostRiddle(req: operations.PostRiddleRequest, config?: AxiosRequestConfig): Promise<operations.PostRiddleResponse>;
    PutRiddle(req: operations.PutRiddleRequest, config?: AxiosRequestConfig): Promise<operations.PutRiddleResponse>;
}
export {};
