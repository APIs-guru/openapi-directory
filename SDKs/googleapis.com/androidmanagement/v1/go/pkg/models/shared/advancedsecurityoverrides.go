package shared

type AdvancedSecurityOverridesCommonCriteriaModeEnum string

const (
	AdvancedSecurityOverridesCommonCriteriaModeEnumCommonCriteriaModeUnspecified AdvancedSecurityOverridesCommonCriteriaModeEnum = "COMMON_CRITERIA_MODE_UNSPECIFIED"
	AdvancedSecurityOverridesCommonCriteriaModeEnumCommonCriteriaModeDisabled    AdvancedSecurityOverridesCommonCriteriaModeEnum = "COMMON_CRITERIA_MODE_DISABLED"
	AdvancedSecurityOverridesCommonCriteriaModeEnumCommonCriteriaModeEnabled     AdvancedSecurityOverridesCommonCriteriaModeEnum = "COMMON_CRITERIA_MODE_ENABLED"
)

type AdvancedSecurityOverridesDeveloperSettingsEnum string

const (
	AdvancedSecurityOverridesDeveloperSettingsEnumDeveloperSettingsUnspecified AdvancedSecurityOverridesDeveloperSettingsEnum = "DEVELOPER_SETTINGS_UNSPECIFIED"
	AdvancedSecurityOverridesDeveloperSettingsEnumDeveloperSettingsDisabled    AdvancedSecurityOverridesDeveloperSettingsEnum = "DEVELOPER_SETTINGS_DISABLED"
	AdvancedSecurityOverridesDeveloperSettingsEnumDeveloperSettingsAllowed     AdvancedSecurityOverridesDeveloperSettingsEnum = "DEVELOPER_SETTINGS_ALLOWED"
)

type AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum string

const (
	AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnumGooglePlayProtectVerifyAppsUnspecified AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum = "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED"
	AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnumVerifyAppsEnforced                     AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum = "VERIFY_APPS_ENFORCED"
	AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnumVerifyAppsUserChoice                   AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum = "VERIFY_APPS_USER_CHOICE"
)

type AdvancedSecurityOverridesUntrustedAppsPolicyEnum string

const (
	AdvancedSecurityOverridesUntrustedAppsPolicyEnumUntrustedAppsPolicyUnspecified    AdvancedSecurityOverridesUntrustedAppsPolicyEnum = "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
	AdvancedSecurityOverridesUntrustedAppsPolicyEnumDisallowInstall                   AdvancedSecurityOverridesUntrustedAppsPolicyEnum = "DISALLOW_INSTALL"
	AdvancedSecurityOverridesUntrustedAppsPolicyEnumAllowInstallInPersonalProfileOnly AdvancedSecurityOverridesUntrustedAppsPolicyEnum = "ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY"
	AdvancedSecurityOverridesUntrustedAppsPolicyEnumAllowInstallDeviceWide            AdvancedSecurityOverridesUntrustedAppsPolicyEnum = "ALLOW_INSTALL_DEVICE_WIDE"
)

// AdvancedSecurityOverrides
// Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
type AdvancedSecurityOverrides struct {
	CommonCriteriaMode                       *AdvancedSecurityOverridesCommonCriteriaModeEnum          `json:"commonCriteriaMode,omitempty"`
	DeveloperSettings                        *AdvancedSecurityOverridesDeveloperSettingsEnum           `json:"developerSettings,omitempty"`
	GooglePlayProtectVerifyApps              *AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum `json:"googlePlayProtectVerifyApps,omitempty"`
	PersonalAppsThatCanReadWorkNotifications []string                                                  `json:"personalAppsThatCanReadWorkNotifications,omitempty"`
	UntrustedAppsPolicy                      *AdvancedSecurityOverridesUntrustedAppsPolicyEnum         `json:"untrustedAppsPolicy,omitempty"`
}
