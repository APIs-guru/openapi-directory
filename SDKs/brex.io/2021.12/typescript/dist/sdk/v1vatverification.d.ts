import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1VatVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * vatBasic - Returns a verification result
     *
     * Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
    **/
    vatBasic(req: operations.VatBasicRequest, config?: AxiosRequestConfig): Promise<operations.VatBasicResponse>;
    /**
     * vatComprehensive - Returns a verification result and company data
     *
     * Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
    **/
    vatComprehensive(req: operations.VatComprehensiveRequest, config?: AxiosRequestConfig): Promise<operations.VatComprehensiveResponse>;
    /**
     * vatLevelTwo - Returns a level two verification result
     *
     * Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.
    **/
    vatLevelTwo(req: operations.VatLevelTwoRequest, config?: AxiosRequestConfig): Promise<operations.VatLevelTwoResponse>;
    /**
     * vatLookup - Returns a list of vat numbers with additional data
     *
     * Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.
    **/
    vatLookup(req: operations.VatLookupRequest, config?: AxiosRequestConfig): Promise<operations.VatLookupResponse>;
}
