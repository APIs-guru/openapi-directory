import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedSecurityOverrides } from "./advancedsecurityoverrides";
import { AlwaysOnVpnPackage } from "./alwaysonvpnpackage";
import { ApplicationPolicy } from "./applicationpolicy";
import { ChoosePrivateKeyRule } from "./chooseprivatekeyrule";
import { ComplianceRule } from "./compliancerule";
import { CrossProfilePolicies } from "./crossprofilepolicies";
import { UserFacingMessage } from "./userfacingmessage";
import { KioskCustomization } from "./kioskcustomization";
import { OncCertificateProvider } from "./onccertificateprovider";
import { PasswordRequirements } from "./passwordrequirements";
import { PermissionGrant } from "./permissiongrant";
import { PackageNameList } from "./packagenamelist";
import { PersistentPreferredActivity } from "./persistentpreferredactivity";
import { PersonalUsagePolicies } from "./personalusagepolicies";
import { PolicyEnforcementRule } from "./policyenforcementrule";
import { ProxyInfo } from "./proxyinfo";
import { SetupAction } from "./setupaction";
import { StatusReportingSettings } from "./statusreportingsettings";
import { SystemUpdate } from "./systemupdate";
import { UsageLog } from "./usagelog";
export declare enum PolicyAndroidDevicePolicyTracksEnum {
    AppTrackUnspecified = "APP_TRACK_UNSPECIFIED",
    Production = "PRODUCTION",
    Beta = "BETA"
}
export declare enum PolicyAppAutoUpdatePolicyEnum {
    AppAutoUpdatePolicyUnspecified = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED",
    ChoiceToTheUser = "CHOICE_TO_THE_USER",
    Never = "NEVER",
    WifiOnly = "WIFI_ONLY",
    Always = "ALWAYS"
}
export declare enum PolicyAutoDateAndTimeZoneEnum {
    AutoDateAndTimeZoneUnspecified = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED",
    AutoDateAndTimeZoneUserChoice = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE",
    AutoDateAndTimeZoneEnforced = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
}
export declare enum PolicyCameraAccessEnum {
    CameraAccessUnspecified = "CAMERA_ACCESS_UNSPECIFIED",
    CameraAccessUserChoice = "CAMERA_ACCESS_USER_CHOICE",
    CameraAccessDisabled = "CAMERA_ACCESS_DISABLED",
    CameraAccessEnforced = "CAMERA_ACCESS_ENFORCED"
}
export declare enum PolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}
export declare enum PolicyEncryptionPolicyEnum {
    EncryptionPolicyUnspecified = "ENCRYPTION_POLICY_UNSPECIFIED",
    EnabledWithoutPassword = "ENABLED_WITHOUT_PASSWORD",
    EnabledWithPassword = "ENABLED_WITH_PASSWORD"
}
export declare enum PolicyKeyguardDisabledFeaturesEnum {
    KeyguardDisabledFeatureUnspecified = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED",
    Camera = "CAMERA",
    Notifications = "NOTIFICATIONS",
    UnredactedNotifications = "UNREDACTED_NOTIFICATIONS",
    TrustAgents = "TRUST_AGENTS",
    DisableFingerprint = "DISABLE_FINGERPRINT",
    DisableRemoteInput = "DISABLE_REMOTE_INPUT",
    Face = "FACE",
    Iris = "IRIS",
    Biometrics = "BIOMETRICS",
    AllFeatures = "ALL_FEATURES"
}
export declare enum PolicyLocationModeEnum {
    LocationModeUnspecified = "LOCATION_MODE_UNSPECIFIED",
    HighAccuracy = "HIGH_ACCURACY",
    SensorsOnly = "SENSORS_ONLY",
    BatterySaving = "BATTERY_SAVING",
    Off = "OFF",
    LocationUserChoice = "LOCATION_USER_CHOICE",
    LocationEnforced = "LOCATION_ENFORCED",
    LocationDisabled = "LOCATION_DISABLED"
}
export declare enum PolicyMicrophoneAccessEnum {
    MicrophoneAccessUnspecified = "MICROPHONE_ACCESS_UNSPECIFIED",
    MicrophoneAccessUserChoice = "MICROPHONE_ACCESS_USER_CHOICE",
    MicrophoneAccessDisabled = "MICROPHONE_ACCESS_DISABLED",
    MicrophoneAccessEnforced = "MICROPHONE_ACCESS_ENFORCED"
}
export declare enum PolicyPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED",
    Whitelist = "WHITELIST",
    Blacklist = "BLACKLIST"
}
export declare enum PolicyPreferentialNetworkServiceEnum {
    PreferentialNetworkServiceUnspecified = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED",
    PreferentialNetworkServiceDisabled = "PREFERENTIAL_NETWORK_SERVICE_DISABLED",
    PreferentialNetworkServiceEnabled = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
}
export declare enum PolicyStayOnPluggedModesEnum {
    BatteryPluggedModeUnspecified = "BATTERY_PLUGGED_MODE_UNSPECIFIED",
    Ac = "AC",
    Usb = "USB",
    Wireless = "WIRELESS"
}
/**
 * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
**/
export declare class Policy extends SpeakeasyBase {
    accountTypesWithManagementDisabled?: string[];
    addUserDisabled?: boolean;
    adjustVolumeDisabled?: boolean;
    advancedSecurityOverrides?: AdvancedSecurityOverrides;
    alwaysOnVpnPackage?: AlwaysOnVpnPackage;
    androidDevicePolicyTracks?: PolicyAndroidDevicePolicyTracksEnum[];
    appAutoUpdatePolicy?: PolicyAppAutoUpdatePolicyEnum;
    applications?: ApplicationPolicy[];
    autoDateAndTimeZone?: PolicyAutoDateAndTimeZoneEnum;
    autoTimeRequired?: boolean;
    blockApplicationsEnabled?: boolean;
    bluetoothConfigDisabled?: boolean;
    bluetoothContactSharingDisabled?: boolean;
    bluetoothDisabled?: boolean;
    cameraAccess?: PolicyCameraAccessEnum;
    cameraDisabled?: boolean;
    cellBroadcastsConfigDisabled?: boolean;
    choosePrivateKeyRules?: ChoosePrivateKeyRule[];
    complianceRules?: ComplianceRule[];
    createWindowsDisabled?: boolean;
    credentialsConfigDisabled?: boolean;
    crossProfilePolicies?: CrossProfilePolicies;
    dataRoamingDisabled?: boolean;
    debuggingFeaturesAllowed?: boolean;
    defaultPermissionPolicy?: PolicyDefaultPermissionPolicyEnum;
    deviceOwnerLockScreenInfo?: UserFacingMessage;
    encryptionPolicy?: PolicyEncryptionPolicyEnum;
    ensureVerifyAppsEnabled?: boolean;
    factoryResetDisabled?: boolean;
    frpAdminEmails?: string[];
    funDisabled?: boolean;
    installAppsDisabled?: boolean;
    installUnknownSourcesAllowed?: boolean;
    keyguardDisabled?: boolean;
    keyguardDisabledFeatures?: PolicyKeyguardDisabledFeaturesEnum[];
    kioskCustomLauncherEnabled?: boolean;
    kioskCustomization?: KioskCustomization;
    locationMode?: PolicyLocationModeEnum;
    longSupportMessage?: UserFacingMessage;
    maximumTimeToLock?: string;
    microphoneAccess?: PolicyMicrophoneAccessEnum;
    minimumApiLevel?: number;
    mobileNetworksConfigDisabled?: boolean;
    modifyAccountsDisabled?: boolean;
    mountPhysicalMediaDisabled?: boolean;
    name?: string;
    networkEscapeHatchEnabled?: boolean;
    networkResetDisabled?: boolean;
    oncCertificateProviders?: OncCertificateProvider[];
    openNetworkConfiguration?: Map<string, any>;
    outgoingBeamDisabled?: boolean;
    outgoingCallsDisabled?: boolean;
    passwordPolicies?: PasswordRequirements[];
    passwordRequirements?: PasswordRequirements;
    permissionGrants?: PermissionGrant[];
    permittedAccessibilityServices?: PackageNameList;
    permittedInputMethods?: PackageNameList;
    persistentPreferredActivities?: PersistentPreferredActivity[];
    personalUsagePolicies?: PersonalUsagePolicies;
    playStoreMode?: PolicyPlayStoreModeEnum;
    policyEnforcementRules?: PolicyEnforcementRule[];
    preferentialNetworkService?: PolicyPreferentialNetworkServiceEnum;
    privateKeySelectionEnabled?: boolean;
    recommendedGlobalProxy?: ProxyInfo;
    removeUserDisabled?: boolean;
    safeBootDisabled?: boolean;
    screenCaptureDisabled?: boolean;
    setUserIconDisabled?: boolean;
    setWallpaperDisabled?: boolean;
    setupActions?: SetupAction[];
    shareLocationDisabled?: boolean;
    shortSupportMessage?: UserFacingMessage;
    skipFirstUseHintsEnabled?: boolean;
    smsDisabled?: boolean;
    statusBarDisabled?: boolean;
    statusReportingSettings?: StatusReportingSettings;
    stayOnPluggedModes?: PolicyStayOnPluggedModesEnum[];
    systemUpdate?: SystemUpdate;
    tetheringConfigDisabled?: boolean;
    uninstallAppsDisabled?: boolean;
    unmuteMicrophoneDisabled?: boolean;
    usageLog?: UsageLog;
    usbFileTransferDisabled?: boolean;
    usbMassStorageEnabled?: boolean;
    version?: string;
    vpnConfigDisabled?: boolean;
    wifiConfigDisabled?: boolean;
    wifiConfigsLockdownEnabled?: boolean;
}
