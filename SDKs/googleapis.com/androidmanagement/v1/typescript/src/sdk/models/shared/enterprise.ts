import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactInfo } from "./contactinfo";
import { ExternalData } from "./externaldata";
import { SigninDetail } from "./signindetail";
import { TermsAndConditions } from "./termsandconditions";

export enum EnterpriseEnabledNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED"
,    Enrollment = "ENROLLMENT"
,    ComplianceReport = "COMPLIANCE_REPORT"
,    StatusReport = "STATUS_REPORT"
,    Command = "COMMAND"
,    UsageLogs = "USAGE_LOGS"
}


// Enterprise
/** 
 * The configuration applied to an enterprise.
**/
export class Enterprise extends SpeakeasyBase {
  @Metadata({ data: "json, name=appAutoApprovalEnabled" })
  appAutoApprovalEnabled?: boolean;

  @Metadata({ data: "json, name=contactInfo" })
  contactInfo?: ContactInfo;

  @Metadata({ data: "json, name=enabledNotificationTypes" })
  enabledNotificationTypes?: EnterpriseEnabledNotificationTypesEnum[];

  @Metadata({ data: "json, name=enterpriseDisplayName" })
  enterpriseDisplayName?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: ExternalData;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryColor" })
  primaryColor?: number;

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=signinDetails", elemType: shared.SigninDetail })
  signinDetails?: SigninDetail[];

  @Metadata({ data: "json, name=termsAndConditions", elemType: shared.TermsAndConditions })
  termsAndConditions?: TermsAndConditions[];
}
