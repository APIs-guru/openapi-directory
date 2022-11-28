import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.fraudlabspro.com", "https://api.fraudlabspro.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getV1VerificationResult - Verify that an OTP sent by the Send SMS Verification API is valid.
    **/
    getV1VerificationResult(req: operations.GetV1VerificationResultRequest, config?: AxiosRequestConfig): Promise<operations.GetV1VerificationResultResponse>;
    /**
     * postV1VerificationSend - Send an SMS with verification code and a custom message for authentication purpose.
    **/
    postV1VerificationSend(req: operations.PostV1VerificationSendRequest, config?: AxiosRequestConfig): Promise<operations.PostV1VerificationSendResponse>;
}
export {};
