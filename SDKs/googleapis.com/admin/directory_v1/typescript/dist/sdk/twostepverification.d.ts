import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TwoStepVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * directoryTwoStepVerificationTurnOff - Turns off 2-Step Verification for user.
    **/
    directoryTwoStepVerificationTurnOff(req: operations.DirectoryTwoStepVerificationTurnOffRequest, config?: AxiosRequestConfig): Promise<operations.DirectoryTwoStepVerificationTurnOffResponse>;
}
