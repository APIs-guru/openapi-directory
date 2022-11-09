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
    GetPirateGenerateInsult(req: operations.GetPirateGenerateInsultRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateInsultResponse>;
    GetPirateGenerateLoremIpsum(req: operations.GetPirateGenerateLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateLoremIpsumResponse>;
    GetPirateGenerateName(req: operations.GetPirateGenerateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateNameResponse>;
    GetPirateTranslate(req: operations.GetPirateTranslateRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateTranslateResponse>;
}
export {};
