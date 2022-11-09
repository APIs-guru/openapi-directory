import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions } from "./googlecloudassuredworkloadsv1violationremediationinstructions";
export declare enum GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum {
    RemediationTypeUnspecified = "REMEDIATION_TYPE_UNSPECIFIED",
    RemediationBooleanOrgPolicyViolation = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION",
    RemediationListAllowedValuesOrgPolicyViolation = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION",
    RemediationListDeniedValuesOrgPolicyViolation = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION",
    RemediationRestrictCmekCryptoKeyProjectsOrgPolicyViolation = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
}
/**
 * Represents remediation guidance to resolve compliance violation for AssuredWorkload
**/
export declare class GoogleCloudAssuredworkloadsV1ViolationRemediation extends SpeakeasyBase {
    compliantValues?: string[];
    instructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions;
    remediationType?: GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum;
}
