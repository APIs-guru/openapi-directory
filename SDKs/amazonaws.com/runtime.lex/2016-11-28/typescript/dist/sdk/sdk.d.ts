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
    DeleteSession(req: operations.DeleteSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSessionResponse>;
    GetSession(req: operations.GetSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
    PostContent(req: operations.PostContentRequest, config?: AxiosRequestConfig): Promise<operations.PostContentResponse>;
    PostText(req: operations.PostTextRequest, config?: AxiosRequestConfig): Promise<operations.PostTextResponse>;
    PutSession(req: operations.PutSessionRequest, config?: AxiosRequestConfig): Promise<operations.PutSessionResponse>;
}
export {};
