import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInfo } from "./contactinfo";
import { ExternalData } from "./externaldata";
import { SigninDetail } from "./signindetail";
import { TermsAndConditions } from "./termsandconditions";
export declare enum EnterpriseEnabledNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED",
    Enrollment = "ENROLLMENT",
    ComplianceReport = "COMPLIANCE_REPORT",
    StatusReport = "STATUS_REPORT",
    Command = "COMMAND",
    UsageLogs = "USAGE_LOGS"
}
/**
 * The configuration applied to an enterprise.
**/
export declare class Enterprise extends SpeakeasyBase {
    appAutoApprovalEnabled?: boolean;
    contactInfo?: ContactInfo;
    enabledNotificationTypes?: EnterpriseEnabledNotificationTypesEnum[];
    enterpriseDisplayName?: string;
    logo?: ExternalData;
    name?: string;
    primaryColor?: number;
    pubsubTopic?: string;
    signinDetails?: SigninDetail[];
    termsAndConditions?: TermsAndConditions[];
}
