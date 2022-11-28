import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions } from "./googlecloudassuredworkloadsv1beta1violationremediationinstructions";


export enum GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum {
    RemediationTypeUnspecified = "REMEDIATION_TYPE_UNSPECIFIED",
    RemediationBooleanOrgPolicyViolation = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION",
    RemediationListAllowedValuesOrgPolicyViolation = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION",
    RemediationListDeniedValuesOrgPolicyViolation = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION",
    RemediationRestrictCmekCryptoKeyProjectsOrgPolicyViolation = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
}


// GoogleCloudAssuredworkloadsV1beta1ViolationRemediation
/** 
 * Represents remediation guidance to resolve compliance violation for AssuredWorkload
**/
export class GoogleCloudAssuredworkloadsV1beta1ViolationRemediation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compliantValues" })
  compliantValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=instructions" })
  instructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions;

  @SpeakeasyMetadata({ data: "json, name=remediationType" })
  remediationType?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum;
}
