package shared

type PersonalApplicationPolicyInstallTypeEnum string

const (
	PersonalApplicationPolicyInstallTypeEnumInstallTypeUnspecified PersonalApplicationPolicyInstallTypeEnum = "INSTALL_TYPE_UNSPECIFIED"
	PersonalApplicationPolicyInstallTypeEnumBlocked                PersonalApplicationPolicyInstallTypeEnum = "BLOCKED"
	PersonalApplicationPolicyInstallTypeEnumAvailable              PersonalApplicationPolicyInstallTypeEnum = "AVAILABLE"
)

// PersonalApplicationPolicy
// Policies for apps in the personal profile of a company-owned device with a work profile.
type PersonalApplicationPolicy struct {
	InstallType *PersonalApplicationPolicyInstallTypeEnum `json:"installType,omitempty"`
	PackageName *string                                   `json:"packageName,omitempty"`
}
