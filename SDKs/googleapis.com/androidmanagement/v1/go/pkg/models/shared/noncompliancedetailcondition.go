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

// NonComplianceDetailCondition
// A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
type NonComplianceDetailCondition struct {
	NonComplianceReason *NonComplianceDetailConditionNonComplianceReasonEnum `json:"nonComplianceReason,omitempty"`
	PackageName         *string                                              `json:"packageName,omitempty"`
	SettingName         *string                                              `json:"settingName,omitempty"`
}
