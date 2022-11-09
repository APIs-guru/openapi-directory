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
    GetShakespeareGenerateInsult(req: operations.GetShakespeareGenerateInsultRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateInsultResponse>;
    GetShakespeareGenerateLoremIpsum(req: operations.GetShakespeareGenerateLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateLoremIpsumResponse>;
    GetShakespeareGenerateName(req: operations.GetShakespeareGenerateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateNameResponse>;
    GetShakespeareQuote(req: operations.GetShakespeareQuoteRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareQuoteResponse>;
    GetShakespeareTranslate(req: operations.GetShakespeareTranslateRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareTranslateResponse>;
}
export {};
