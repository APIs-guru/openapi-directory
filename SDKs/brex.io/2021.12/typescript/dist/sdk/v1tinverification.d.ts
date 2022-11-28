import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1TinVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tinVerificationBasicCheck - Verifies a TIN number
     *
     * Performs a basic verification check of a given TIN number and name.
    **/
    tinVerificationBasicCheck(req: operations.TinVerificationBasicCheckRequest, config?: AxiosRequestConfig): Promise<operations.TinVerificationBasicCheckResponse>;
    /**
     * tinVerificationComprehensiveCheck - EIN Name Lookup with TIN number and retrieves company data
     *
     * Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details
    **/
    tinVerificationComprehensiveCheck(req: operations.TinVerificationComprehensiveCheckRequest, config?: AxiosRequestConfig): Promise<operations.TinVerificationComprehensiveCheckResponse>;
    /**
     * tinVerificationNameLookup - EIN Name Lookup with TIN number
     *
     * Performs an EIN name match using provided TIN Number
    **/
    tinVerificationNameLookup(req: operations.TinVerificationNameLookupRequest, config?: AxiosRequestConfig): Promise<operations.TinVerificationNameLookupResponse>;
}
