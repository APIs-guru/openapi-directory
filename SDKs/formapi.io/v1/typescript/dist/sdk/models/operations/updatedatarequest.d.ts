import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDataRequestPathParams extends SpeakeasyBase {
    dataRequestId: string;
}
export declare enum UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum {
    None = "none",
    PhoneNumber = "phone_number",
    Totp = "totp",
    MobilePush = "mobile_push",
    SecurityKey = "security_key",
    Fingerprint = "fingerprint"
}
export declare enum UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum {
    None = "none",
    Password = "password",
    Oauth = "oauth",
    EmailLink = "email_link",
    PhoneNumber = "phone_number",
    Ldap = "ldap",
    Saml = "saml"
}
export declare class UpdateDataRequestUpdateSubmissionDataRequestData extends SpeakeasyBase {
    authPhoneNumberHash?: string;
    authProvider?: string;
    authSecondFactorType?: UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum;
    authSessionIdHash?: string;
    authSessionStartedAt?: string;
    authType?: UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum;
    authUserIdHash?: string;
    authUsernameHash?: string;
    email?: string;
    fields?: string[];
    metadata?: Map<string, any>;
    name?: string;
    order?: number;
}
export declare class UpdateDataRequestSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum UpdateDataRequestUpdateDataRequestResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateDataRequestUpdateDataRequestResponse extends SpeakeasyBase {
    dataRequest: shared.SubmissionDataRequest;
    errors?: string[];
    status: UpdateDataRequestUpdateDataRequestResponseStatusEnum;
}
export declare class UpdateDataRequestRequest extends SpeakeasyBase {
    pathParams: UpdateDataRequestPathParams;
    request: UpdateDataRequestUpdateSubmissionDataRequestData;
    security: UpdateDataRequestSecurity;
}
export declare class UpdateDataRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    invalidRequest?: shared.InvalidRequest;
    updateDataRequestResponse?: UpdateDataRequestUpdateDataRequestResponse;
}
