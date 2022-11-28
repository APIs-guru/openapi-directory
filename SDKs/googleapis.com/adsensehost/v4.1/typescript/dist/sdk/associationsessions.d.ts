import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Associationsessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsensehostAssociationsessionsStart - Create an association session for initiating an association with an AdSense user.
    **/
    adsensehostAssociationsessionsStart(req: operations.AdsensehostAssociationsessionsStartRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAssociationsessionsStartResponse>;
    /**
     * adsensehostAssociationsessionsVerify - Verify an association session after the association callback returns from AdSense signup.
    **/
    adsensehostAssociationsessionsVerify(req: operations.AdsensehostAssociationsessionsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.AdsensehostAssociationsessionsVerifyResponse>;
}
