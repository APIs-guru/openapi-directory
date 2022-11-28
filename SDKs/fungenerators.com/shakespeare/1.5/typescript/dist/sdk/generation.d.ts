import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Generation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getShakespeareGenerateInsult - Generate random Shakespeare style insults.
    **/
    getShakespeareGenerateInsult(req: operations.GetShakespeareGenerateInsultRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateInsultResponse>;
    /**
     * getShakespeareGenerateLoremIpsum - Generate Shakespeare lorem ipsum.
    **/
    getShakespeareGenerateLoremIpsum(req: operations.GetShakespeareGenerateLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateLoremIpsumResponse>;
    /**
     * getShakespeareGenerateName - Generate random Shakespearen names.
    **/
    getShakespeareGenerateName(req: operations.GetShakespeareGenerateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareGenerateNameResponse>;
}
