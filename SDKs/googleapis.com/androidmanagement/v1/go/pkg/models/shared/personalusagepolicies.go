package shared

type PersonalUsagePoliciesPersonalPlayStoreModeEnum string

const (
	PersonalUsagePoliciesPersonalPlayStoreModeEnumPlayStoreModeUnspecified PersonalUsagePoliciesPersonalPlayStoreModeEnum = "PLAY_STORE_MODE_UNSPECIFIED"
	PersonalUsagePoliciesPersonalPlayStoreModeEnumBlacklist                PersonalUsagePoliciesPersonalPlayStoreModeEnum = "BLACKLIST"
	PersonalUsagePoliciesPersonalPlayStoreModeEnumBlocklist                PersonalUsagePoliciesPersonalPlayStoreModeEnum = "BLOCKLIST"
	PersonalUsagePoliciesPersonalPlayStoreModeEnumAllowlist                PersonalUsagePoliciesPersonalPlayStoreModeEnum = "ALLOWLIST"
)

type PersonalUsagePolicies struct {
	AccountTypesWithManagementDisabled []string                                        `json:"accountTypesWithManagementDisabled"`
	CameraDisabled                     *bool                                           `json:"cameraDisabled"`
	MaxDaysWithWorkOff                 *int32                                          `json:"maxDaysWithWorkOff"`
	PersonalApplications               []PersonalApplicationPolicy                     `json:"personalApplications"`
	PersonalPlayStoreMode              *PersonalUsagePoliciesPersonalPlayStoreModeEnum `json:"personalPlayStoreMode"`
	ScreenCaptureDisabled              *bool                                           `json:"screenCaptureDisabled"`
}
