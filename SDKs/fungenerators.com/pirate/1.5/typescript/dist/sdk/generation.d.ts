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
     * getPirateGenerateInsult - Generate random pirate insults.
    **/
    getPirateGenerateInsult(req: operations.GetPirateGenerateInsultRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateInsultResponse>;
    /**
     * getPirateGenerateLoremIpsum - Generate pirate lorem ipsum.
    **/
    getPirateGenerateLoremIpsum(req: operations.GetPirateGenerateLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateLoremIpsumResponse>;
    /**
     * getPirateGenerateName - Generate random pirate names.
    **/
    getPirateGenerateName(req: operations.GetPirateGenerateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPirateGenerateNameResponse>;
}
