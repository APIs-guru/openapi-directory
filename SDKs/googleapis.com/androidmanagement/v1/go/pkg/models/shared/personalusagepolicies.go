package shared

type PersonalUsagePoliciesPersonalPlayStoreModeEnum string

const (
	PersonalUsagePoliciesPersonalPlayStoreModeEnumPlayStoreModeUnspecified PersonalUsagePoliciesPersonalPlayStoreModeEnum = "PLAY_STORE_MODE_UNSPECIFIED"
	PersonalUsagePoliciesPersonalPlayStoreModeEnumBlacklist                PersonalUsagePoliciesPersonalPlayStoreModeEnum = "BLACKLIST"
	PersonalUsagePoliciesPersonalPlayStoreModeEnumBlocklist                PersonalUsagePoliciesPersonalPlayStoreModeEnum = "BLOCKLIST"
	PersonalUsagePoliciesPersonalPlayStoreModeEnumAllowlist                PersonalUsagePoliciesPersonalPlayStoreModeEnum = "ALLOWLIST"
)

type PersonalUsagePolicies struct {
	AccountTypesWithManagementDisabled []string                                        `json:"accountTypesWithManagementDisabled,omitempty"`
	CameraDisabled                     *bool                                           `json:"cameraDisabled,omitempty"`
	MaxDaysWithWorkOff                 *int32                                          `json:"maxDaysWithWorkOff,omitempty"`
	PersonalApplications               []PersonalApplicationPolicy                     `json:"personalApplications,omitempty"`
	PersonalPlayStoreMode              *PersonalUsagePoliciesPersonalPlayStoreModeEnum `json:"personalPlayStoreMode,omitempty"`
	ScreenCaptureDisabled              *bool                                           `json:"screenCaptureDisabled,omitempty"`
}
