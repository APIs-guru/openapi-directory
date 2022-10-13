package shared

type GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum string

const (
	GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnumRemediationTypeUnspecified                                 GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum = "REMEDIATION_TYPE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnumRemediationBooleanOrgPolicyViolation                       GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
	GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnumRemediationListAllowedValuesOrgPolicyViolation             GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
	GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnumRemediationListDeniedValuesOrgPolicyViolation              GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
	GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnumRemediationRestrictCmekCryptoKeyProjectsOrgPolicyViolation GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
)

type GoogleCloudAssuredworkloadsV1beta1ViolationRemediation struct {
	CompliantValues []string                                                                   `json:"compliantValues"`
	Instructions    *GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions        `json:"instructions"`
	RemediationType *GoogleCloudAssuredworkloadsV1beta1ViolationRemediationRemediationTypeEnum `json:"remediationType"`
}
