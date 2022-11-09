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
    PostV1OrderFeedback(req: operations.PostV1OrderFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PostV1OrderFeedbackResponse>;
    PostV1OrderScreen(req: operations.PostV1OrderScreenRequest, config?: AxiosRequestConfig): Promise<operations.PostV1OrderScreenResponse>;
}
export {};
