import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VerificationCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryVerificationCodesGenerate - Generates new backup verification codes for the user.
    **/
    directoryVerificationCodesGenerate(req: operations.DirectoryVerificationCodesGenerateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryVerificationCodesGenerateResponse>;
    /**
     * directoryVerificationCodesInvalidate - Invalidates the current backup verification codes for the user.
    **/
    directoryVerificationCodesInvalidate(req: operations.DirectoryVerificationCodesInvalidateRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryVerificationCodesInvalidateResponse>;
    /**
     * directoryVerificationCodesList - Returns the current set of valid backup verification codes for the specified user.
    **/
    directoryVerificationCodesList(req: operations.DirectoryVerificationCodesListRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryVerificationCodesListResponse>;
}
