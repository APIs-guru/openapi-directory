import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1EinVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * einVerificationBasic - Verifies an EIN number
     *
     * Performs a basic verification check of a given EIN tax number.
    **/
    einVerificationBasic(req: operations.EinVerificationBasicRequest, config?: AxiosRequestConfig): Promise<operations.EinVerificationBasicResponse>;
    /**
     * einVerificationComprehensive - Verifies EIN number and retrieves company data
     *
     * Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details
    **/
    einVerificationComprehensive(req: operations.EinVerificationComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.EinVerificationComprehensiveResponse>;
    /**
     * einVerificationLookup - Retrieves a list of EIN numbers
     *
     * Lookup EIN number for a company by its company name
    **/
    einVerificationLookup(req: operations.EinVerificationLookupRequest, config?: AxiosRequestConfig): Promise<operations.EinVerificationLookupResponse>;
}
