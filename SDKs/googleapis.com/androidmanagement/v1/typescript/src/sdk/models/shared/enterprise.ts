import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactInfo } from "./contactinfo";
import { ExternalData } from "./externaldata";
import { SigninDetail } from "./signindetail";
import { TermsAndConditions } from "./termsandconditions";


export enum EnterpriseEnabledNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED",
    Enrollment = "ENROLLMENT",
    ComplianceReport = "COMPLIANCE_REPORT",
    StatusReport = "STATUS_REPORT",
    Command = "COMMAND",
    UsageLogs = "USAGE_LOGS"
}


// Enterprise
/** 
 * The configuration applied to an enterprise.
**/
export class Enterprise extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appAutoApprovalEnabled" })
  appAutoApprovalEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contactInfo" })
  contactInfo?: ContactInfo;

  @SpeakeasyMetadata({ data: "json, name=enabledNotificationTypes" })
  enabledNotificationTypes?: EnterpriseEnabledNotificationTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=enterpriseDisplayName" })
  enterpriseDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: ExternalData;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryColor" })
  primaryColor?: number;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=signinDetails", elemType: SigninDetail })
  signinDetails?: SigninDetail[];

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions", elemType: TermsAndConditions })
  termsAndConditions?: TermsAndConditions[];
}
