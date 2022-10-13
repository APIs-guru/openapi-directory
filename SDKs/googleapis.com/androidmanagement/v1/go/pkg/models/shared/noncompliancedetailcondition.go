package shared

type NonComplianceDetailConditionNonComplianceReasonEnum string

const (
	NonComplianceDetailConditionNonComplianceReasonEnumNonComplianceReasonUnspecified NonComplianceDetailConditionNonComplianceReasonEnum = "NON_COMPLIANCE_REASON_UNSPECIFIED"
	NonComplianceDetailConditionNonComplianceReasonEnumAPILevel                       NonComplianceDetailConditionNonComplianceReasonEnum = "API_LEVEL"
	NonComplianceDetailConditionNonComplianceReasonEnumManagementMode                 NonComplianceDetailConditionNonComplianceReasonEnum = "MANAGEMENT_MODE"
	NonComplianceDetailConditionNonComplianceReasonEnumUserAction                     NonComplianceDetailConditionNonComplianceReasonEnum = "USER_ACTION"
	NonComplianceDetailConditionNonComplianceReasonEnumInvalidValue                   NonComplianceDetailConditionNonComplianceReasonEnum = "INVALID_VALUE"
	NonComplianceDetailConditionNonComplianceReasonEnumAppNotInstalled                NonComplianceDetailConditionNonComplianceReasonEnum = "APP_NOT_INSTALLED"
	NonComplianceDetailConditionNonComplianceReasonEnumUnsupported                    NonComplianceDetailConditionNonComplianceReasonEnum = "UNSUPPORTED"
	NonComplianceDetailConditionNonComplianceReasonEnumAppInstalled                   NonComplianceDetailConditionNonComplianceReasonEnum = "APP_INSTALLED"
	NonComplianceDetailConditionNonComplianceReasonEnumPending                        NonComplianceDetailConditionNonComplianceReasonEnum = "PENDING"
	NonComplianceDetailConditionNonComplianceReasonEnumAppIncompatible                NonComplianceDetailConditionNonComplianceReasonEnum = "APP_INCOMPATIBLE"
	NonComplianceDetailConditionNonComplianceReasonEnumAppNotUpdated                  NonComplianceDetailConditionNonComplianceReasonEnum = "APP_NOT_UPDATED"
)

type NonComplianceDetailCondition struct {
	NonComplianceReason *NonComplianceDetailConditionNonComplianceReasonEnum `json:"nonComplianceReason"`
	PackageName         *string                                              `json:"packageName"`
	SettingName         *string                                              `json:"settingName"`
}
