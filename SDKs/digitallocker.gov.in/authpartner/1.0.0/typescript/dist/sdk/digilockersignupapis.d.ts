import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DigiLockerSignUpApIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * signUpId - SIGN UP
     *
     * This API is used to validate Aadhaar details and verify the mobile number by generating an OTP. This API call, if successful, will be followed by verify OTP call by the partner application if the user is online or available to perform OTP validation as indicated in verification parameter
    **/
    signUpId(req: operations.SignUpIdRequest, config?: AxiosRequestConfig): Promise<operations.SignUpIdResponse>;
    /**
     * verifyOtpId - Verify OTP
     *
     * This API is used to verify the OTP sent by DigiLocker during the sign up API call above.
    **/
    verifyOtpId(req: operations.VerifyOtpIdRequest, config?: AxiosRequestConfig): Promise<operations.VerifyOtpIdResponse>;
}
