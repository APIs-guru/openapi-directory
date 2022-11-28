import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare enum EnrollmentTokenAllowPersonalUsageEnum {
    AllowPersonalUsageUnspecified = "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
    PersonalUsageAllowed = "PERSONAL_USAGE_ALLOWED",
    PersonalUsageDisallowed = "PERSONAL_USAGE_DISALLOWED"
}
/**
 * An enrollment token.
**/
export declare class EnrollmentToken extends SpeakeasyBase {
    additionalData?: string;
    allowPersonalUsage?: EnrollmentTokenAllowPersonalUsageEnum;
    duration?: string;
    expirationTimestamp?: string;
    name?: string;
    oneTimeOnly?: boolean;
    policyName?: string;
    qrCode?: string;
    user?: User;
    value?: string;
}
