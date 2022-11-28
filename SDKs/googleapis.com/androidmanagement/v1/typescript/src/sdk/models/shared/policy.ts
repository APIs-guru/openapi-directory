import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum PolicyAndroidDevicePolicyTracksEnum {
    AppTrackUnspecified = "APP_TRACK_UNSPECIFIED",
    Production = "PRODUCTION",
    Beta = "BETA"
}

export enum PolicyAppAutoUpdatePolicyEnum {
    AppAutoUpdatePolicyUnspecified = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED",
    ChoiceToTheUser = "CHOICE_TO_THE_USER",
    Never = "NEVER",
    WifiOnly = "WIFI_ONLY",
    Always = "ALWAYS"
}

export enum PolicyAutoDateAndTimeZoneEnum {
    AutoDateAndTimeZoneUnspecified = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED",
    AutoDateAndTimeZoneUserChoice = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE",
    AutoDateAndTimeZoneEnforced = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
}

export enum PolicyCameraAccessEnum {
    CameraAccessUnspecified = "CAMERA_ACCESS_UNSPECIFIED",
    CameraAccessUserChoice = "CAMERA_ACCESS_USER_CHOICE",
    CameraAccessDisabled = "CAMERA_ACCESS_DISABLED",
    CameraAccessEnforced = "CAMERA_ACCESS_ENFORCED"
}

export enum PolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}

export enum PolicyEncryptionPolicyEnum {
    EncryptionPolicyUnspecified = "ENCRYPTION_POLICY_UNSPECIFIED",
    EnabledWithoutPassword = "ENABLED_WITHOUT_PASSWORD",
    EnabledWithPassword = "ENABLED_WITH_PASSWORD"
}

export enum PolicyKeyguardDisabledFeaturesEnum {
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

export enum PolicyLocationModeEnum {
    LocationModeUnspecified = "LOCATION_MODE_UNSPECIFIED",
    HighAccuracy = "HIGH_ACCURACY",
    SensorsOnly = "SENSORS_ONLY",
    BatterySaving = "BATTERY_SAVING",
    Off = "OFF",
    LocationUserChoice = "LOCATION_USER_CHOICE",
    LocationEnforced = "LOCATION_ENFORCED",
    LocationDisabled = "LOCATION_DISABLED"
}

export enum PolicyMicrophoneAccessEnum {
    MicrophoneAccessUnspecified = "MICROPHONE_ACCESS_UNSPECIFIED",
    MicrophoneAccessUserChoice = "MICROPHONE_ACCESS_USER_CHOICE",
    MicrophoneAccessDisabled = "MICROPHONE_ACCESS_DISABLED",
    MicrophoneAccessEnforced = "MICROPHONE_ACCESS_ENFORCED"
}

export enum PolicyPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED",
    Whitelist = "WHITELIST",
    Blacklist = "BLACKLIST"
}

export enum PolicyPreferentialNetworkServiceEnum {
    PreferentialNetworkServiceUnspecified = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED",
    PreferentialNetworkServiceDisabled = "PREFERENTIAL_NETWORK_SERVICE_DISABLED",
    PreferentialNetworkServiceEnabled = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
}

export enum PolicyStayOnPluggedModesEnum {
    BatteryPluggedModeUnspecified = "BATTERY_PLUGGED_MODE_UNSPECIFIED",
    Ac = "AC",
    Usb = "USB",
    Wireless = "WIRELESS"
}


// Policy
/** 
 * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountTypesWithManagementDisabled" })
  accountTypesWithManagementDisabled?: string[];

  @SpeakeasyMetadata({ data: "json, name=addUserDisabled" })
  addUserDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adjustVolumeDisabled" })
  adjustVolumeDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advancedSecurityOverrides" })
  advancedSecurityOverrides?: AdvancedSecurityOverrides;

  @SpeakeasyMetadata({ data: "json, name=alwaysOnVpnPackage" })
  alwaysOnVpnPackage?: AlwaysOnVpnPackage;

  @SpeakeasyMetadata({ data: "json, name=androidDevicePolicyTracks" })
  androidDevicePolicyTracks?: PolicyAndroidDevicePolicyTracksEnum[];

  @SpeakeasyMetadata({ data: "json, name=appAutoUpdatePolicy" })
  appAutoUpdatePolicy?: PolicyAppAutoUpdatePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=applications", elemType: ApplicationPolicy })
  applications?: ApplicationPolicy[];

  @SpeakeasyMetadata({ data: "json, name=autoDateAndTimeZone" })
  autoDateAndTimeZone?: PolicyAutoDateAndTimeZoneEnum;

  @SpeakeasyMetadata({ data: "json, name=autoTimeRequired" })
  autoTimeRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blockApplicationsEnabled" })
  blockApplicationsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bluetoothConfigDisabled" })
  bluetoothConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bluetoothContactSharingDisabled" })
  bluetoothContactSharingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bluetoothDisabled" })
  bluetoothDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cameraAccess" })
  cameraAccess?: PolicyCameraAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=cameraDisabled" })
  cameraDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cellBroadcastsConfigDisabled" })
  cellBroadcastsConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=choosePrivateKeyRules", elemType: ChoosePrivateKeyRule })
  choosePrivateKeyRules?: ChoosePrivateKeyRule[];

  @SpeakeasyMetadata({ data: "json, name=complianceRules", elemType: ComplianceRule })
  complianceRules?: ComplianceRule[];

  @SpeakeasyMetadata({ data: "json, name=createWindowsDisabled" })
  createWindowsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=credentialsConfigDisabled" })
  credentialsConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=crossProfilePolicies" })
  crossProfilePolicies?: CrossProfilePolicies;

  @SpeakeasyMetadata({ data: "json, name=dataRoamingDisabled" })
  dataRoamingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=debuggingFeaturesAllowed" })
  debuggingFeaturesAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultPermissionPolicy" })
  defaultPermissionPolicy?: PolicyDefaultPermissionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceOwnerLockScreenInfo" })
  deviceOwnerLockScreenInfo?: UserFacingMessage;

  @SpeakeasyMetadata({ data: "json, name=encryptionPolicy" })
  encryptionPolicy?: PolicyEncryptionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=ensureVerifyAppsEnabled" })
  ensureVerifyAppsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=factoryResetDisabled" })
  factoryResetDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frpAdminEmails" })
  frpAdminEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=funDisabled" })
  funDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=installAppsDisabled" })
  installAppsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=installUnknownSourcesAllowed" })
  installUnknownSourcesAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyguardDisabled" })
  keyguardDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyguardDisabledFeatures" })
  keyguardDisabledFeatures?: PolicyKeyguardDisabledFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=kioskCustomLauncherEnabled" })
  kioskCustomLauncherEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kioskCustomization" })
  kioskCustomization?: KioskCustomization;

  @SpeakeasyMetadata({ data: "json, name=locationMode" })
  locationMode?: PolicyLocationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=longSupportMessage" })
  longSupportMessage?: UserFacingMessage;

  @SpeakeasyMetadata({ data: "json, name=maximumTimeToLock" })
  maximumTimeToLock?: string;

  @SpeakeasyMetadata({ data: "json, name=microphoneAccess" })
  microphoneAccess?: PolicyMicrophoneAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=minimumApiLevel" })
  minimumApiLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=mobileNetworksConfigDisabled" })
  mobileNetworksConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifyAccountsDisabled" })
  modifyAccountsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mountPhysicalMediaDisabled" })
  mountPhysicalMediaDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkEscapeHatchEnabled" })
  networkEscapeHatchEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=networkResetDisabled" })
  networkResetDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oncCertificateProviders", elemType: OncCertificateProvider })
  oncCertificateProviders?: OncCertificateProvider[];

  @SpeakeasyMetadata({ data: "json, name=openNetworkConfiguration" })
  openNetworkConfiguration?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=outgoingBeamDisabled" })
  outgoingBeamDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outgoingCallsDisabled" })
  outgoingCallsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=passwordPolicies", elemType: PasswordRequirements })
  passwordPolicies?: PasswordRequirements[];

  @SpeakeasyMetadata({ data: "json, name=passwordRequirements" })
  passwordRequirements?: PasswordRequirements;

  @SpeakeasyMetadata({ data: "json, name=permissionGrants", elemType: PermissionGrant })
  permissionGrants?: PermissionGrant[];

  @SpeakeasyMetadata({ data: "json, name=permittedAccessibilityServices" })
  permittedAccessibilityServices?: PackageNameList;

  @SpeakeasyMetadata({ data: "json, name=permittedInputMethods" })
  permittedInputMethods?: PackageNameList;

  @SpeakeasyMetadata({ data: "json, name=persistentPreferredActivities", elemType: PersistentPreferredActivity })
  persistentPreferredActivities?: PersistentPreferredActivity[];

  @SpeakeasyMetadata({ data: "json, name=personalUsagePolicies" })
  personalUsagePolicies?: PersonalUsagePolicies;

  @SpeakeasyMetadata({ data: "json, name=playStoreMode" })
  playStoreMode?: PolicyPlayStoreModeEnum;

  @SpeakeasyMetadata({ data: "json, name=policyEnforcementRules", elemType: PolicyEnforcementRule })
  policyEnforcementRules?: PolicyEnforcementRule[];

  @SpeakeasyMetadata({ data: "json, name=preferentialNetworkService" })
  preferentialNetworkService?: PolicyPreferentialNetworkServiceEnum;

  @SpeakeasyMetadata({ data: "json, name=privateKeySelectionEnabled" })
  privateKeySelectionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recommendedGlobalProxy" })
  recommendedGlobalProxy?: ProxyInfo;

  @SpeakeasyMetadata({ data: "json, name=removeUserDisabled" })
  removeUserDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=safeBootDisabled" })
  safeBootDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=screenCaptureDisabled" })
  screenCaptureDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setUserIconDisabled" })
  setUserIconDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setWallpaperDisabled" })
  setWallpaperDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setupActions", elemType: SetupAction })
  setupActions?: SetupAction[];

  @SpeakeasyMetadata({ data: "json, name=shareLocationDisabled" })
  shareLocationDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shortSupportMessage" })
  shortSupportMessage?: UserFacingMessage;

  @SpeakeasyMetadata({ data: "json, name=skipFirstUseHintsEnabled" })
  skipFirstUseHintsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smsDisabled" })
  smsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statusBarDisabled" })
  statusBarDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statusReportingSettings" })
  statusReportingSettings?: StatusReportingSettings;

  @SpeakeasyMetadata({ data: "json, name=stayOnPluggedModes" })
  stayOnPluggedModes?: PolicyStayOnPluggedModesEnum[];

  @SpeakeasyMetadata({ data: "json, name=systemUpdate" })
  systemUpdate?: SystemUpdate;

  @SpeakeasyMetadata({ data: "json, name=tetheringConfigDisabled" })
  tetheringConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uninstallAppsDisabled" })
  uninstallAppsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unmuteMicrophoneDisabled" })
  unmuteMicrophoneDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usageLog" })
  usageLog?: UsageLog;

  @SpeakeasyMetadata({ data: "json, name=usbFileTransferDisabled" })
  usbFileTransferDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usbMassStorageEnabled" })
  usbMassStorageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=vpnConfigDisabled" })
  vpnConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifiConfigDisabled" })
  wifiConfigDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wifiConfigsLockdownEnabled" })
  wifiConfigsLockdownEnabled?: boolean;
}
