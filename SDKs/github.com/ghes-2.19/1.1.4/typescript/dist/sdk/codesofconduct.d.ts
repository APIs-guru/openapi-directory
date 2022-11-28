import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CodesOfConduct {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * codesOfConductGetAllCodesOfConduct - Get all codes of conduct
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/codes-of-conduct#get-all-codes-of-conduct - API method documentation
    **/
    codesOfConductGetAllCodesOfConduct(config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetAllCodesOfConductResponse>;
    /**
     * codesOfConductGetConductCode - Get a code of conduct
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/codes-of-conduct#get-a-code-of-conduct - API method documentation
    **/
    codesOfConductGetConductCode(req: operations.CodesOfConductGetConductCodeRequest, config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetConductCodeResponse>;
}
