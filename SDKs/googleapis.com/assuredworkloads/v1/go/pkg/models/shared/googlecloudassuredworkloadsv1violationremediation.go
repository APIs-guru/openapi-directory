package shared

type GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum string

const (
	GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnumRemediationTypeUnspecified                                 GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum = "REMEDIATION_TYPE_UNSPECIFIED"
	GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnumRemediationBooleanOrgPolicyViolation                       GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
	GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnumRemediationListAllowedValuesOrgPolicyViolation             GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
	GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnumRemediationListDeniedValuesOrgPolicyViolation              GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
	GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnumRemediationRestrictCmekCryptoKeyProjectsOrgPolicyViolation GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"
)

type GoogleCloudAssuredworkloadsV1ViolationRemediation struct {
	CompliantValues []string                                                              `json:"compliantValues,omitempty"`
	Instructions    *GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions        `json:"instructions,omitempty"`
	RemediationType *GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum `json:"remediationType,omitempty"`
}
