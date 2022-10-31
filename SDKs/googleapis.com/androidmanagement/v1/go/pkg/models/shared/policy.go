package shared




type PolicyAndroidDevicePolicyTracksEnum string

const (
    PolicyAndroidDevicePolicyTracksEnumAppTrackUnspecified PolicyAndroidDevicePolicyTracksEnum = "APP_TRACK_UNSPECIFIED"
PolicyAndroidDevicePolicyTracksEnumProduction PolicyAndroidDevicePolicyTracksEnum = "PRODUCTION"
PolicyAndroidDevicePolicyTracksEnumBeta PolicyAndroidDevicePolicyTracksEnum = "BETA"
)



type PolicyAppAutoUpdatePolicyEnum string

const (
    PolicyAppAutoUpdatePolicyEnumAppAutoUpdatePolicyUnspecified PolicyAppAutoUpdatePolicyEnum = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED"
PolicyAppAutoUpdatePolicyEnumChoiceToTheUser PolicyAppAutoUpdatePolicyEnum = "CHOICE_TO_THE_USER"
PolicyAppAutoUpdatePolicyEnumNever PolicyAppAutoUpdatePolicyEnum = "NEVER"
PolicyAppAutoUpdatePolicyEnumWifiOnly PolicyAppAutoUpdatePolicyEnum = "WIFI_ONLY"
PolicyAppAutoUpdatePolicyEnumAlways PolicyAppAutoUpdatePolicyEnum = "ALWAYS"
)



type PolicyAutoDateAndTimeZoneEnum string

const (
    PolicyAutoDateAndTimeZoneEnumAutoDateAndTimeZoneUnspecified PolicyAutoDateAndTimeZoneEnum = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED"
PolicyAutoDateAndTimeZoneEnumAutoDateAndTimeZoneUserChoice PolicyAutoDateAndTimeZoneEnum = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE"
PolicyAutoDateAndTimeZoneEnumAutoDateAndTimeZoneEnforced PolicyAutoDateAndTimeZoneEnum = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
)



type PolicyCameraAccessEnum string

const (
    PolicyCameraAccessEnumCameraAccessUnspecified PolicyCameraAccessEnum = "CAMERA_ACCESS_UNSPECIFIED"
PolicyCameraAccessEnumCameraAccessUserChoice PolicyCameraAccessEnum = "CAMERA_ACCESS_USER_CHOICE"
PolicyCameraAccessEnumCameraAccessDisabled PolicyCameraAccessEnum = "CAMERA_ACCESS_DISABLED"
PolicyCameraAccessEnumCameraAccessEnforced PolicyCameraAccessEnum = "CAMERA_ACCESS_ENFORCED"
)



type PolicyDefaultPermissionPolicyEnum string

const (
    PolicyDefaultPermissionPolicyEnumPermissionPolicyUnspecified PolicyDefaultPermissionPolicyEnum = "PERMISSION_POLICY_UNSPECIFIED"
PolicyDefaultPermissionPolicyEnumPrompt PolicyDefaultPermissionPolicyEnum = "PROMPT"
PolicyDefaultPermissionPolicyEnumGrant PolicyDefaultPermissionPolicyEnum = "GRANT"
PolicyDefaultPermissionPolicyEnumDeny PolicyDefaultPermissionPolicyEnum = "DENY"
)



type PolicyEncryptionPolicyEnum string

const (
    PolicyEncryptionPolicyEnumEncryptionPolicyUnspecified PolicyEncryptionPolicyEnum = "ENCRYPTION_POLICY_UNSPECIFIED"
PolicyEncryptionPolicyEnumEnabledWithoutPassword PolicyEncryptionPolicyEnum = "ENABLED_WITHOUT_PASSWORD"
PolicyEncryptionPolicyEnumEnabledWithPassword PolicyEncryptionPolicyEnum = "ENABLED_WITH_PASSWORD"
)



type PolicyKeyguardDisabledFeaturesEnum string

const (
    PolicyKeyguardDisabledFeaturesEnumKeyguardDisabledFeatureUnspecified PolicyKeyguardDisabledFeaturesEnum = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
PolicyKeyguardDisabledFeaturesEnumCamera PolicyKeyguardDisabledFeaturesEnum = "CAMERA"
PolicyKeyguardDisabledFeaturesEnumNotifications PolicyKeyguardDisabledFeaturesEnum = "NOTIFICATIONS"
PolicyKeyguardDisabledFeaturesEnumUnredactedNotifications PolicyKeyguardDisabledFeaturesEnum = "UNREDACTED_NOTIFICATIONS"
PolicyKeyguardDisabledFeaturesEnumTrustAgents PolicyKeyguardDisabledFeaturesEnum = "TRUST_AGENTS"
PolicyKeyguardDisabledFeaturesEnumDisableFingerprint PolicyKeyguardDisabledFeaturesEnum = "DISABLE_FINGERPRINT"
PolicyKeyguardDisabledFeaturesEnumDisableRemoteInput PolicyKeyguardDisabledFeaturesEnum = "DISABLE_REMOTE_INPUT"
PolicyKeyguardDisabledFeaturesEnumFace PolicyKeyguardDisabledFeaturesEnum = "FACE"
PolicyKeyguardDisabledFeaturesEnumIris PolicyKeyguardDisabledFeaturesEnum = "IRIS"
PolicyKeyguardDisabledFeaturesEnumBiometrics PolicyKeyguardDisabledFeaturesEnum = "BIOMETRICS"
PolicyKeyguardDisabledFeaturesEnumAllFeatures PolicyKeyguardDisabledFeaturesEnum = "ALL_FEATURES"
)



type PolicyLocationModeEnum string

const (
    PolicyLocationModeEnumLocationModeUnspecified PolicyLocationModeEnum = "LOCATION_MODE_UNSPECIFIED"
PolicyLocationModeEnumHighAccuracy PolicyLocationModeEnum = "HIGH_ACCURACY"
PolicyLocationModeEnumSensorsOnly PolicyLocationModeEnum = "SENSORS_ONLY"
PolicyLocationModeEnumBatterySaving PolicyLocationModeEnum = "BATTERY_SAVING"
PolicyLocationModeEnumOff PolicyLocationModeEnum = "OFF"
PolicyLocationModeEnumLocationUserChoice PolicyLocationModeEnum = "LOCATION_USER_CHOICE"
PolicyLocationModeEnumLocationEnforced PolicyLocationModeEnum = "LOCATION_ENFORCED"
PolicyLocationModeEnumLocationDisabled PolicyLocationModeEnum = "LOCATION_DISABLED"
)



type PolicyMicrophoneAccessEnum string

const (
    PolicyMicrophoneAccessEnumMicrophoneAccessUnspecified PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_UNSPECIFIED"
PolicyMicrophoneAccessEnumMicrophoneAccessUserChoice PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_USER_CHOICE"
PolicyMicrophoneAccessEnumMicrophoneAccessDisabled PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_DISABLED"
PolicyMicrophoneAccessEnumMicrophoneAccessEnforced PolicyMicrophoneAccessEnum = "MICROPHONE_ACCESS_ENFORCED"
)



type PolicyPlayStoreModeEnum string

const (
    PolicyPlayStoreModeEnumPlayStoreModeUnspecified PolicyPlayStoreModeEnum = "PLAY_STORE_MODE_UNSPECIFIED"
PolicyPlayStoreModeEnumWhitelist PolicyPlayStoreModeEnum = "WHITELIST"
PolicyPlayStoreModeEnumBlacklist PolicyPlayStoreModeEnum = "BLACKLIST"
)



type PolicyPreferentialNetworkServiceEnum string

const (
    PolicyPreferentialNetworkServiceEnumPreferentialNetworkServiceUnspecified PolicyPreferentialNetworkServiceEnum = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED"
PolicyPreferentialNetworkServiceEnumPreferentialNetworkServiceDisabled PolicyPreferentialNetworkServiceEnum = "PREFERENTIAL_NETWORK_SERVICE_DISABLED"
PolicyPreferentialNetworkServiceEnumPreferentialNetworkServiceEnabled PolicyPreferentialNetworkServiceEnum = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
)



type PolicyStayOnPluggedModesEnum string

const (
    PolicyStayOnPluggedModesEnumBatteryPluggedModeUnspecified PolicyStayOnPluggedModesEnum = "BATTERY_PLUGGED_MODE_UNSPECIFIED"
PolicyStayOnPluggedModesEnumAc PolicyStayOnPluggedModesEnum = "AC"
PolicyStayOnPluggedModesEnumUsb PolicyStayOnPluggedModesEnum = "USB"
PolicyStayOnPluggedModesEnumWireless PolicyStayOnPluggedModesEnum = "WIRELESS"
)


type Policy struct {
    AccountTypesWithManagementDisabled []string `json:"accountTypesWithManagementDisabled,omitempty"`
    AddUserDisabled *bool `json:"addUserDisabled,omitempty"`
    AdjustVolumeDisabled *bool `json:"adjustVolumeDisabled,omitempty"`
    AdvancedSecurityOverrides *AdvancedSecurityOverrides `json:"advancedSecurityOverrides,omitempty"`
    AlwaysOnVpnPackage *AlwaysOnVpnPackage `json:"alwaysOnVpnPackage,omitempty"`
    AndroidDevicePolicyTracks []PolicyAndroidDevicePolicyTracksEnum `json:"androidDevicePolicyTracks,omitempty"`
    AppAutoUpdatePolicy *PolicyAppAutoUpdatePolicyEnum `json:"appAutoUpdatePolicy,omitempty"`
    Applications []ApplicationPolicy `json:"applications,omitempty"`
    AutoDateAndTimeZone *PolicyAutoDateAndTimeZoneEnum `json:"autoDateAndTimeZone,omitempty"`
    AutoTimeRequired *bool `json:"autoTimeRequired,omitempty"`
    BlockApplicationsEnabled *bool `json:"blockApplicationsEnabled,omitempty"`
    BluetoothConfigDisabled *bool `json:"bluetoothConfigDisabled,omitempty"`
    BluetoothContactSharingDisabled *bool `json:"bluetoothContactSharingDisabled,omitempty"`
    BluetoothDisabled *bool `json:"bluetoothDisabled,omitempty"`
    CameraAccess *PolicyCameraAccessEnum `json:"cameraAccess,omitempty"`
    CameraDisabled *bool `json:"cameraDisabled,omitempty"`
    CellBroadcastsConfigDisabled *bool `json:"cellBroadcastsConfigDisabled,omitempty"`
    ChoosePrivateKeyRules []ChoosePrivateKeyRule `json:"choosePrivateKeyRules,omitempty"`
    ComplianceRules []ComplianceRule `json:"complianceRules,omitempty"`
    CreateWindowsDisabled *bool `json:"createWindowsDisabled,omitempty"`
    CredentialsConfigDisabled *bool `json:"credentialsConfigDisabled,omitempty"`
    CrossProfilePolicies *CrossProfilePolicies `json:"crossProfilePolicies,omitempty"`
    DataRoamingDisabled *bool `json:"dataRoamingDisabled,omitempty"`
    DebuggingFeaturesAllowed *bool `json:"debuggingFeaturesAllowed,omitempty"`
    DefaultPermissionPolicy *PolicyDefaultPermissionPolicyEnum `json:"defaultPermissionPolicy,omitempty"`
    DeviceOwnerLockScreenInfo *UserFacingMessage `json:"deviceOwnerLockScreenInfo,omitempty"`
    EncryptionPolicy *PolicyEncryptionPolicyEnum `json:"encryptionPolicy,omitempty"`
    EnsureVerifyAppsEnabled *bool `json:"ensureVerifyAppsEnabled,omitempty"`
    FactoryResetDisabled *bool `json:"factoryResetDisabled,omitempty"`
    FrpAdminEmails []string `json:"frpAdminEmails,omitempty"`
    FunDisabled *bool `json:"funDisabled,omitempty"`
    InstallAppsDisabled *bool `json:"installAppsDisabled,omitempty"`
    InstallUnknownSourcesAllowed *bool `json:"installUnknownSourcesAllowed,omitempty"`
    KeyguardDisabled *bool `json:"keyguardDisabled,omitempty"`
    KeyguardDisabledFeatures []PolicyKeyguardDisabledFeaturesEnum `json:"keyguardDisabledFeatures,omitempty"`
    KioskCustomLauncherEnabled *bool `json:"kioskCustomLauncherEnabled,omitempty"`
    KioskCustomization *KioskCustomization `json:"kioskCustomization,omitempty"`
    LocationMode *PolicyLocationModeEnum `json:"locationMode,omitempty"`
    LongSupportMessage *UserFacingMessage `json:"longSupportMessage,omitempty"`
    MaximumTimeToLock *string `json:"maximumTimeToLock,omitempty"`
    MicrophoneAccess *PolicyMicrophoneAccessEnum `json:"microphoneAccess,omitempty"`
    MinimumAPILevel *int32 `json:"minimumApiLevel,omitempty"`
    MobileNetworksConfigDisabled *bool `json:"mobileNetworksConfigDisabled,omitempty"`
    ModifyAccountsDisabled *bool `json:"modifyAccountsDisabled,omitempty"`
    MountPhysicalMediaDisabled *bool `json:"mountPhysicalMediaDisabled,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkEscapeHatchEnabled *bool `json:"networkEscapeHatchEnabled,omitempty"`
    NetworkResetDisabled *bool `json:"networkResetDisabled,omitempty"`
    OncCertificateProviders []OncCertificateProvider `json:"oncCertificateProviders,omitempty"`
    OpenNetworkConfiguration map[string]interface{} `json:"openNetworkConfiguration,omitempty"`
    OutgoingBeamDisabled *bool `json:"outgoingBeamDisabled,omitempty"`
    OutgoingCallsDisabled *bool `json:"outgoingCallsDisabled,omitempty"`
    PasswordPolicies []PasswordRequirements `json:"passwordPolicies,omitempty"`
    PasswordRequirements *PasswordRequirements `json:"passwordRequirements,omitempty"`
    PermissionGrants []PermissionGrant `json:"permissionGrants,omitempty"`
    PermittedAccessibilityServices *PackageNameList `json:"permittedAccessibilityServices,omitempty"`
    PermittedInputMethods *PackageNameList `json:"permittedInputMethods,omitempty"`
    PersistentPreferredActivities []PersistentPreferredActivity `json:"persistentPreferredActivities,omitempty"`
    PersonalUsagePolicies *PersonalUsagePolicies `json:"personalUsagePolicies,omitempty"`
    PlayStoreMode *PolicyPlayStoreModeEnum `json:"playStoreMode,omitempty"`
    PolicyEnforcementRules []PolicyEnforcementRule `json:"policyEnforcementRules,omitempty"`
    PreferentialNetworkService *PolicyPreferentialNetworkServiceEnum `json:"preferentialNetworkService,omitempty"`
    PrivateKeySelectionEnabled *bool `json:"privateKeySelectionEnabled,omitempty"`
    RecommendedGlobalProxy *ProxyInfo `json:"recommendedGlobalProxy,omitempty"`
    RemoveUserDisabled *bool `json:"removeUserDisabled,omitempty"`
    SafeBootDisabled *bool `json:"safeBootDisabled,omitempty"`
    ScreenCaptureDisabled *bool `json:"screenCaptureDisabled,omitempty"`
    SetUserIconDisabled *bool `json:"setUserIconDisabled,omitempty"`
    SetWallpaperDisabled *bool `json:"setWallpaperDisabled,omitempty"`
    SetupActions []SetupAction `json:"setupActions,omitempty"`
    ShareLocationDisabled *bool `json:"shareLocationDisabled,omitempty"`
    ShortSupportMessage *UserFacingMessage `json:"shortSupportMessage,omitempty"`
    SkipFirstUseHintsEnabled *bool `json:"skipFirstUseHintsEnabled,omitempty"`
    SmsDisabled *bool `json:"smsDisabled,omitempty"`
    StatusBarDisabled *bool `json:"statusBarDisabled,omitempty"`
    StatusReportingSettings *StatusReportingSettings `json:"statusReportingSettings,omitempty"`
    StayOnPluggedModes []PolicyStayOnPluggedModesEnum `json:"stayOnPluggedModes,omitempty"`
    SystemUpdate *SystemUpdate `json:"systemUpdate,omitempty"`
    TetheringConfigDisabled *bool `json:"tetheringConfigDisabled,omitempty"`
    UninstallAppsDisabled *bool `json:"uninstallAppsDisabled,omitempty"`
    UnmuteMicrophoneDisabled *bool `json:"unmuteMicrophoneDisabled,omitempty"`
    UsageLog *UsageLog `json:"usageLog,omitempty"`
    UsbFileTransferDisabled *bool `json:"usbFileTransferDisabled,omitempty"`
    UsbMassStorageEnabled *bool `json:"usbMassStorageEnabled,omitempty"`
    Version *string `json:"version,omitempty"`
    VpnConfigDisabled *bool `json:"vpnConfigDisabled,omitempty"`
    WifiConfigDisabled *bool `json:"wifiConfigDisabled,omitempty"`
    WifiConfigsLockdownEnabled *bool `json:"wifiConfigsLockdownEnabled,omitempty"`
    
}

