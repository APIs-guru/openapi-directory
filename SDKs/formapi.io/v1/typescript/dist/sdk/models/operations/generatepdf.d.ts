import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GeneratePdfPathParams extends SpeakeasyBase {
    templateId: string;
}
export declare enum GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum {
    None = "none",
    PhoneNumber = "phone_number",
    Totp = "totp",
    MobilePush = "mobile_push",
    SecurityKey = "security_key",
    Fingerprint = "fingerprint"
}
export declare enum GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum {
    None = "none",
    Password = "password",
    Oauth = "oauth",
    EmailLink = "email_link",
    PhoneNumber = "phone_number",
    Ldap = "ldap",
    Saml = "saml"
}
export declare class GeneratePdfSubmissionDataCreateSubmissionDataRequestData extends SpeakeasyBase {
    authPhoneNumberHash?: string;
    authProvider?: string;
    authSecondFactorType?: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum;
    authSessionIdHash?: string;
    authSessionStartedAt?: string;
    authType: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum;
    authUserIdHash?: string;
    authUsernameHash?: string;
    email: string;
    fields?: string[];
    metadata?: Map<string, any>;
    name?: string;
    order?: number;
}
export declare class GeneratePdfSubmissionData extends SpeakeasyBase {
    css?: string;
    data: Map<string, any>;
    dataRequests?: GeneratePdfSubmissionDataCreateSubmissionDataRequestData[];
    fieldOverrides?: Map<string, any>;
    html?: string;
    metadata?: Map<string, any>;
    test?: boolean;
}
export declare class GeneratePdfSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum GeneratePdfCreateSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class GeneratePdfCreateSubmissionResponse extends SpeakeasyBase {
    errors?: string[];
    status: GeneratePdfCreateSubmissionResponseStatusEnum;
    submission: shared.Submission;
}
export declare class GeneratePdfRequest extends SpeakeasyBase {
    pathParams: GeneratePdfPathParams;
    request: GeneratePdfSubmissionData;
    security: GeneratePdfSecurity;
}
export declare class GeneratePdfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createSubmissionResponse?: GeneratePdfCreateSubmissionResponse;
    error?: shared.Error;
    invalidRequest?: shared.InvalidRequest;
}
