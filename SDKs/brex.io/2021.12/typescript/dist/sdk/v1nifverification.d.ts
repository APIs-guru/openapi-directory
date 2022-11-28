import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1NifVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * nifBasic - Verifies a NIF number
     *
     * Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.
    **/
    nifBasic(req: operations.NifBasicRequest, config?: AxiosRequestConfig): Promise<operations.NifBasicResponse>;
    /**
     * nifComprehensive - Verifies a NIF number and retrieves company data
     *
     * Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.
    **/
    nifComprehensive(req: operations.NifComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.NifComprehensiveResponse>;
}
