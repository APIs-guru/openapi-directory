import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SigninDetailAllowPersonalUsageEnum {
    AllowPersonalUsageUnspecified = "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
    PersonalUsageAllowed = "PERSONAL_USAGE_ALLOWED",
    PersonalUsageDisallowed = "PERSONAL_USAGE_DISALLOWED"
}
/**
 * A resource containing sign in details for an enterprise.
**/
export declare class SigninDetail extends SpeakeasyBase {
    allowPersonalUsage?: SigninDetailAllowPersonalUsageEnum;
    qrCode?: string;
    signinEnrollmentToken?: string;
    signinUrl?: string;
}
