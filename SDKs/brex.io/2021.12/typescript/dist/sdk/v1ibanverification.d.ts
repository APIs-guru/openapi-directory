import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1IbanVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ibanBasic - Checks validity of an IBAN number
     *
     * Basic verification of an IBAN number validating its structure
    **/
    ibanBasic(req: operations.IbanBasicRequest, config?: AxiosRequestConfig): Promise<operations.IbanBasicResponse>;
    /**
     * ibanComprehensive - Checks validity of an IBAN number
     *
     * Comprehensive verification of IBAN number using a service provider for verification
    **/
    ibanComprehensive(req: operations.IbanComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.IbanComprehensiveResponse>;
}
