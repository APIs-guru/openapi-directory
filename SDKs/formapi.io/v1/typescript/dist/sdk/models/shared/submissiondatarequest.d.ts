import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubmissionDataRequestAuthSecondFactorTypeEnum {
    None = "none",
    PhoneNumber = "phone_number",
    Totp = "totp",
    MobilePush = "mobile_push",
    SecurityKey = "security_key",
    Fingerprint = "fingerprint"
}
export declare enum SubmissionDataRequestAuthTypeEnum {
    None = "none",
    Password = "password",
    Oauth = "oauth",
    EmailLink = "email_link",
    PhoneNumber = "phone_number",
    Ldap = "ldap",
    Saml = "saml"
}
export declare enum SubmissionDataRequestStateEnum {
    Pending = "pending",
    Completed = "completed"
}
export declare class SubmissionDataRequest extends SpeakeasyBase {
    authPhoneNumberHash?: string;
    authProvider?: string;
    authSecondFactorType?: SubmissionDataRequestAuthSecondFactorTypeEnum;
    authSessionIdHash?: string;
    authSessionStartedAt?: string;
    authType?: SubmissionDataRequestAuthTypeEnum;
    authUserIdHash?: string;
    authUsernameHash?: string;
    completedAt?: string;
    email: string;
    fields: string[];
    id: string;
    ipAddress?: string;
    metadata: Map<string, any>;
    name: string;
    order: number;
    sortOrder: number;
    state: SubmissionDataRequestStateEnum;
    userAgent?: string;
    viewedAt?: string;
}
