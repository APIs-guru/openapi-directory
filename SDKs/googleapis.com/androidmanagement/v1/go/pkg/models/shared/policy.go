package shared

type PolicyAndroidDevicePolicyTracksEnum string

const (
	PolicyAndroidDevicePolicyTracksEnumAppTrackUnspecified PolicyAndroidDevicePolicyTracksEnum = "APP_TRACK_UNSPECIFIED"
	PolicyAndroidDevicePolicyTracksEnumProduction          PolicyAndroidDevicePolicyTracksEnum = "PRODUCTION"
	PolicyAndroidDevicePolicyTracksEnumBeta                PolicyAndroidDevicePolicyTracksEnum = "BETA"
)

type PolicyAppAutoUpdatePolicyEnum string

const (
	PolicyAppAutoUpdatePolicyEnumAppAutoUpdatePolicyUnspecified PolicyAppAutoUpdatePolicyEnum = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED"
	PolicyAppAutoUpdatePolicyEnumChoiceToTheUser                PolicyAppAutoUpdatePolicyEnum = "CHOICE_TO_THE_USER"
	PolicyAppAutoUpdatePolicyEnumNever                          PolicyAppAutoUpdatePolicyEnum = "NEVER"
	PolicyAppAutoUpdatePolicyEnumWifiOnly                       PolicyAppAutoUpdatePolicyEnum = "WIFI_ONLY"
	PolicyAppAutoUpdatePolicyEnumAlways                         PolicyAppAutoUpdatePolicyEnum = "ALWAYS"
)

type PolicyAutoDateAndTimeZoneEnum string

const (
	PolicyAutoDateAndTimeZoneEnumAutoDateAndTimeZoneUnspecified PolicyAutoDateAndTimeZoneEnum = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED"
	PolicyAutoDateAndTimeZoneEnumAutoDateAndTimeZoneUserChoice  PolicyAutoDateAndTimeZoneEnum = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE"
	PolicyAutoDateAndTimeZoneEnumAutoDateAndTimeZoneEnforced    PolicyAutoDateAndTimeZoneEnum = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
)

type PolicyCameraAccessEnum string

const (
	PolicyCameraAccessEnumCameraAccessUnspecified PolicyCameraAccessEnum = "CAMERA_ACCESS_UNSPECIFIED"
	PolicyCameraAccessEnumCameraAccessUserChoice  PolicyCameraAccessEnum = "CAMERA_ACCESS_USER_CHOICE"
	PolicyCameraAccessEnumCameraAccessDisabled    PolicyCameraAccessEnum = "CAMERA_ACCESS_DISABLED"
	PolicyCameraAccessEnumCameraAccessEnforced    PolicyCameraAccessEnum = "CAMERA_ACCESS_ENFORCED"
)

type PolicyDefaultPermissionPolicyEnum string

const (
	PolicyDefaultPermissionPolicyEnumPermissionPolicyUnspecified PolicyDefaultPermissionPolicyEnum = "PERMISSION_POLICY_UNSPECIFIED"
	PolicyDefaultPermissionPolicyEnumPrompt                      PolicyDefaultPermissionPolicyEnum = "PROMPT"
	PolicyDefaultPermissionPolicyEnumGrant                       PolicyDefaultPermissionPolicyEnum = "GRANT"
	PolicyDefaultPermissionPolicyEnumDeny                        PolicyDefaultPermissionPolicyEnum = "DENY"
)

type PolicyEncryptionPolicyEnum string

const (
	PolicyEncryptionPolicyEnumEncryptionPolicyUnspecified PolicyEncryptionPolicyEnum = "ENCRYPTION_POLICY_UNSPECIFIED"
	PolicyEncryptionPolicyEnumEnabledWithoutPassword      PolicyEncryptionPolicyEnum = "ENABLED_WITHOUT_PASSWORD"
	PolicyEncryptionPolicyEnumEnabledWithPassword         PolicyEncryptionPolicyEnum = "ENABLED_WITH_PASSWORD"
)

type PolicyKeyguardDisabledFeaturesEnum string

const (
	PolicyKeyguardDisabledFeaturesEnumKeyguardDisabledFeatureUnspecified PolicyKeyguardDisabledFeaturesEnum = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
	PolicyKeyguardDisabledFeaturesEnumCamera                             PolicyKeyguardDisabledFeaturesEnum = "CAMERA"
	PolicyKeyguardDisabledFeaturesEnumNotifications                      PolicyKeyguardDisabledFeaturesEnum = "NOTIFICATIONS"
	PolicyKeyguardDisabledFeaturesEnumUnredactedNotifications            PolicyKeyguardDisabledFeaturesEnum = "UNREDACTED_NOTIFICATIONS"
	PolicyKeyguardDisabledFeaturesEnumTrustAgents                        PolicyKeyguardDisabledFeaturesEnum = "TRUST_AGENTS"
	PolicyKeyguardDisabledFeaturesEnumDisableFingerprint                 PolicyKeyguardDisabledFeaturesEnum = "DISABLE_FINGERPRINT"
	PolicyKeyguardDisabledFeaturesEnumDisableRemoteInput                 PolicyKeyguardDisabledFeaturesEnum = "DISABLE_REMOTE_INPUT"
	PolicyKeyguardDisabledFeaturesEnumFace                               PolicyKeyguardDisabledFeaturesEnum = "FACE"
	PolicyKeyguardDisabledFeaturesEnumIris                               PolicyKeyguardDisabledFeaturesEnum = "IRIS"
	PolicyKeyguardDisabledFeaturesEnumBiometrics                         PolicyKeyguardDisabledFeaturesEnum = "BIOMETRICS"
	PolicyKeyguardDisabledFeaturesEnumAllFeatures                        PolicyKeyguardDisabledFeaturesEnum = "ALL_FEATURES"
)

type PolicyLocationModeEnum string

const (
	PolicyLocationModeEnumLocationModeUnspecified PolicyLocationModeEnum = "LOCATION_MODE_UNSPECIFIED"
	PolicyLocationModeEnumHighAccuracy            PolicyLocationModeEnum = "HIGH_ACCURACY"
	PolicyLocationModeEnumSensorsOnly             PolicyLocationModeEnum = "SENSORS_ONLY"
	PolicyLocationModeEnumBatterySaving           PolicyLocationModeEnum = "BATTERY_SAVING"
	PolicyLocationModeEnumOff                     PolicyLocationModeEnum = "OFF"
	PolicyLocationModeEnumLocationUserChoice      PolicyLocationModeEnum = "LOCATION_USER_CHOICE"
	PolicyLocationModeEnumLocationEnforced        PolicyLocationModeEnum = "LOCATION_ENFORCED"
	PolicyLocationModeEnumLocationDisabled        PolicyLocationModeEnum = "LOCATION_DISABLED"
)

type PolicyMicrophoneAccessEnum string

const (
	PolicyMicrophoneAccessEnumMicrophoneAccessUnspecified PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_UNSPECIFIED"
	PolicyMicrophoneAccessEnumMicrophoneAccessUserChoice  PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_USER_CHOICE"
	PolicyMicrophoneAccessEnumMicrophoneAccessDisabled    PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_DISABLED"
	PolicyMicrophoneAccessEnumMicrophoneAccessEnforced    PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_ENFORCED"
)

type PolicyPlayStoreModeEnum string

const (
	PolicyPlayStoreModeEnumPlayStoreModeUnspecified PolicyPlayStoreModeEnum = "PLAY_STORE_MODE_UNSPECIFIED"
	PolicyPlayStoreModeEnumWhitelist                PolicyPlayStoreModeEnum = "WHITELIST"
	PolicyPlayStoreModeEnumBlacklist                PolicyPlayStoreModeEnum = "BLACKLIST"
)

type PolicyPreferentialNetworkServiceEnum string

const (
	PolicyPreferentialNetworkServiceEnumPreferentialNetworkServiceUnspecified PolicyPreferentialNetworkServiceEnum = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED"
	PolicyPreferentialNetworkServiceEnumPreferentialNetworkServiceDisabled    PolicyPreferentialNetworkServiceEnum = "PREFERENTIAL_NETWORK_SERVICE_DISABLED"
	PolicyPreferentialNetworkServiceEnumPreferentialNetworkServiceEnabled     PolicyPreferentialNetworkServiceEnum = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
)

type PolicyStayOnPluggedModesEnum string

const (
	PolicyStayOnPluggedModesEnumBatteryPluggedModeUnspecified PolicyStayOnPluggedModesEnum = "BATTERY_PLUGGED_MODE_UNSPECIFIED"
	PolicyStayOnPluggedModesEnumAc                            PolicyStayOnPluggedModesEnum = "AC"
	PolicyStayOnPluggedModesEnumUsb                           PolicyStayOnPluggedModesEnum = "USB"
	PolicyStayOnPluggedModesEnumWireless                      PolicyStayOnPluggedModesEnum = "WIRELESS"
)

type Policy struct {
	AccountTypesWithManagementDisabled []string                              `json:"accountTypesWithManagementDisabled"`
	AddUserDisabled                    *bool                                 `json:"addUserDisabled"`
	AdjustVolumeDisabled               *bool                                 `json:"adjustVolumeDisabled"`
	AdvancedSecurityOverrides          *AdvancedSecurityOverrides            `json:"advancedSecurityOverrides"`
	AlwaysOnVpnPackage                 *AlwaysOnVpnPackage                   `json:"alwaysOnVpnPackage"`
	AndroidDevicePolicyTracks          []PolicyAndroidDevicePolicyTracksEnum `json:"androidDevicePolicyTracks"`
	AppAutoUpdatePolicy                *PolicyAppAutoUpdatePolicyEnum        `json:"appAutoUpdatePolicy"`
	Applications                       []ApplicationPolicy                   `json:"applications"`
	AutoDateAndTimeZone                *PolicyAutoDateAndTimeZoneEnum        `json:"autoDateAndTimeZone"`
	AutoTimeRequired                   *bool                                 `json:"autoTimeRequired"`
	BlockApplicationsEnabled           *bool                                 `json:"blockApplicationsEnabled"`
	BluetoothConfigDisabled            *bool                                 `json:"bluetoothConfigDisabled"`
	BluetoothContactSharingDisabled    *bool                                 `json:"bluetoothContactSharingDisabled"`
	BluetoothDisabled                  *bool                                 `json:"bluetoothDisabled"`
	CameraAccess                       *PolicyCameraAccessEnum               `json:"cameraAccess"`
	CameraDisabled                     *bool                                 `json:"cameraDisabled"`
	CellBroadcastsConfigDisabled       *bool                                 `json:"cellBroadcastsConfigDisabled"`
	ChoosePrivateKeyRules              []ChoosePrivateKeyRule                `json:"choosePrivateKeyRules"`
	ComplianceRules                    []ComplianceRule                      `json:"complianceRules"`
	CreateWindowsDisabled              *bool                                 `json:"createWindowsDisabled"`
	CredentialsConfigDisabled          *bool                                 `json:"credentialsConfigDisabled"`
	CrossProfilePolicies               *CrossProfilePolicies                 `json:"crossProfilePolicies"`
	DataRoamingDisabled                *bool                                 `json:"dataRoamingDisabled"`
	DebuggingFeaturesAllowed           *bool                                 `json:"debuggingFeaturesAllowed"`
	DefaultPermissionPolicy            *PolicyDefaultPermissionPolicyEnum    `json:"defaultPermissionPolicy"`
	DeviceOwnerLockScreenInfo          *UserFacingMessage                    `json:"deviceOwnerLockScreenInfo"`
	EncryptionPolicy                   *PolicyEncryptionPolicyEnum           `json:"encryptionPolicy"`
	EnsureVerifyAppsEnabled            *bool                                 `json:"ensureVerifyAppsEnabled"`
	FactoryResetDisabled               *bool                                 `json:"factoryResetDisabled"`
	FrpAdminEmails                     []string                              `json:"frpAdminEmails"`
	FunDisabled                        *bool                                 `json:"funDisabled"`
	InstallAppsDisabled                *bool                                 `json:"installAppsDisabled"`
	InstallUnknownSourcesAllowed       *bool                                 `json:"installUnknownSourcesAllowed"`
	KeyguardDisabled                   *bool                                 `json:"keyguardDisabled"`
	KeyguardDisabledFeatures           []PolicyKeyguardDisabledFeaturesEnum  `json:"keyguardDisabledFeatures"`
	KioskCustomLauncherEnabled         *bool                                 `json:"kioskCustomLauncherEnabled"`
	KioskCustomization                 *KioskCustomization                   `json:"kioskCustomization"`
	LocationMode                       *PolicyLocationModeEnum               `json:"locationMode"`
	LongSupportMessage                 *UserFacingMessage                    `json:"longSupportMessage"`
	MaximumTimeToLock                  *string                               `json:"maximumTimeToLock"`
	MicrophoneAccess                   *PolicyMicrophoneAccessEnum           `json:"microphoneAccess"`
	MinimumAPILevel                    *int32                                `json:"minimumApiLevel"`
	MobileNetworksConfigDisabled       *bool                                 `json:"mobileNetworksConfigDisabled"`
	ModifyAccountsDisabled             *bool                                 `json:"modifyAccountsDisabled"`
	MountPhysicalMediaDisabled         *bool                                 `json:"mountPhysicalMediaDisabled"`
	Name                               *string                               `json:"name"`
	NetworkEscapeHatchEnabled          *bool                                 `json:"networkEscapeHatchEnabled"`
	NetworkResetDisabled               *bool                                 `json:"networkResetDisabled"`
	OncCertificateProviders            []OncCertificateProvider              `json:"oncCertificateProviders"`
	OpenNetworkConfiguration           map[string]interface{}                `json:"openNetworkConfiguration"`
	OutgoingBeamDisabled               *bool                                 `json:"outgoingBeamDisabled"`
	OutgoingCallsDisabled              *bool                                 `json:"outgoingCallsDisabled"`
	PasswordPolicies                   []PasswordRequirements                `json:"passwordPolicies"`
	PasswordRequirements               *PasswordRequirements                 `json:"passwordRequirements"`
	PermissionGrants                   []PermissionGrant                     `json:"permissionGrants"`
	PermittedAccessibilityServices     *PackageNameList                      `json:"permittedAccessibilityServices"`
	PermittedInputMethods              *PackageNameList                      `json:"permittedInputMethods"`
	PersistentPreferredActivities      []PersistentPreferredActivity         `json:"persistentPreferredActivities"`
	PersonalUsagePolicies              *PersonalUsagePolicies                `json:"personalUsagePolicies"`
	PlayStoreMode                      *PolicyPlayStoreModeEnum              `json:"playStoreMode"`
	PolicyEnforcementRules             []PolicyEnforcementRule               `json:"policyEnforcementRules"`
	PreferentialNetworkService         *PolicyPreferentialNetworkServiceEnum `json:"preferentialNetworkService"`
	PrivateKeySelectionEnabled         *bool                                 `json:"privateKeySelectionEnabled"`
	RecommendedGlobalProxy             *ProxyInfo                            `json:"recommendedGlobalProxy"`
	RemoveUserDisabled                 *bool                                 `json:"removeUserDisabled"`
	SafeBootDisabled                   *bool                                 `json:"safeBootDisabled"`
	ScreenCaptureDisabled              *bool                                 `json:"screenCaptureDisabled"`
	SetUserIconDisabled                *bool                                 `json:"setUserIconDisabled"`
	SetWallpaperDisabled               *bool                                 `json:"setWallpaperDisabled"`
	SetupActions                       []SetupAction                         `json:"setupActions"`
	ShareLocationDisabled              *bool                                 `json:"shareLocationDisabled"`
	ShortSupportMessage                *UserFacingMessage                    `json:"shortSupportMessage"`
	SkipFirstUseHintsEnabled           *bool                                 `json:"skipFirstUseHintsEnabled"`
	SmsDisabled                        *bool                                 `json:"smsDisabled"`
	StatusBarDisabled                  *bool                                 `json:"statusBarDisabled"`
	StatusReportingSettings            *StatusReportingSettings              `json:"statusReportingSettings"`
	StayOnPluggedModes                 []PolicyStayOnPluggedModesEnum        `json:"stayOnPluggedModes"`
	SystemUpdate                       *SystemUpdate                         `json:"systemUpdate"`
	TetheringConfigDisabled            *bool                                 `json:"tetheringConfigDisabled"`
	UninstallAppsDisabled              *bool                                 `json:"uninstallAppsDisabled"`
	UnmuteMicrophoneDisabled           *bool                                 `json:"unmuteMicrophoneDisabled"`
	UsageLog                           *UsageLog                             `json:"usageLog"`
	UsbFileTransferDisabled            *bool                                 `json:"usbFileTransferDisabled"`
	UsbMassStorageEnabled              *bool                                 `json:"usbMassStorageEnabled"`
	Version                            *string                               `json:"version"`
	VpnConfigDisabled                  *bool                                 `json:"vpnConfigDisabled"`
	WifiConfigDisabled                 *bool                                 `json:"wifiConfigDisabled"`
	WifiConfigsLockdownEnabled         *bool                                 `json:"wifiConfigsLockdownEnabled"`
}
