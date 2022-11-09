import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdvancedSecurityOverrides } from "./advancedsecurityoverrides";
import { AlwaysOnVpnPackage } from "./alwaysonvpnpackage";
import { ApplicationPolicy } from "./applicationpolicy";
import { ChoosePrivateKeyRule } from "./chooseprivatekeyrule";
import { ComplianceRule } from "./compliancerule";
import { CrossProfilePolicies } from "./crossprofilepolicies";
import { UserFacingMessage } from "./userfacingmessage";
import { KioskCustomization } from "./kioskcustomization";
import { UserFacingMessage } from "./userfacingmessage";
import { OncCertificateProvider } from "./onccertificateprovider";
import { PasswordRequirements } from "./passwordrequirements";
import { PasswordRequirements } from "./passwordrequirements";
import { PermissionGrant } from "./permissiongrant";
import { PackageNameList } from "./packagenamelist";
import { PackageNameList } from "./packagenamelist";
import { PersistentPreferredActivity } from "./persistentpreferredactivity";
import { PersonalUsagePolicies } from "./personalusagepolicies";
import { PolicyEnforcementRule } from "./policyenforcementrule";
import { ProxyInfo } from "./proxyinfo";
import { SetupAction } from "./setupaction";
import { UserFacingMessage } from "./userfacingmessage";
import { StatusReportingSettings } from "./statusreportingsettings";
import { SystemUpdate } from "./systemupdate";
import { UsageLog } from "./usagelog";

export enum PolicyAndroidDevicePolicyTracksEnum {
    AppTrackUnspecified = "APP_TRACK_UNSPECIFIED"
,    Production = "PRODUCTION"
,    Beta = "BETA"
}

export enum PolicyAppAutoUpdatePolicyEnum {
    AppAutoUpdatePolicyUnspecified = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED"
,    ChoiceToTheUser = "CHOICE_TO_THE_USER"
,    Never = "NEVER"
,    WifiOnly = "WIFI_ONLY"
,    Always = "ALWAYS"
}

export enum PolicyAutoDateAndTimeZoneEnum {
    AutoDateAndTimeZoneUnspecified = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED"
,    AutoDateAndTimeZoneUserChoice = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE"
,    AutoDateAndTimeZoneEnforced = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"
}

export enum PolicyCameraAccessEnum {
    CameraAccessUnspecified = "CAMERA_ACCESS_UNSPECIFIED"
,    CameraAccessUserChoice = "CAMERA_ACCESS_USER_CHOICE"
,    CameraAccessDisabled = "CAMERA_ACCESS_DISABLED"
,    CameraAccessEnforced = "CAMERA_ACCESS_ENFORCED"
}

export enum PolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED"
,    Prompt = "PROMPT"
,    Grant = "GRANT"
,    Deny = "DENY"
}

export enum PolicyEncryptionPolicyEnum {
    EncryptionPolicyUnspecified = "ENCRYPTION_POLICY_UNSPECIFIED"
,    EnabledWithoutPassword = "ENABLED_WITHOUT_PASSWORD"
,    EnabledWithPassword = "ENABLED_WITH_PASSWORD"
}

export enum PolicyKeyguardDisabledFeaturesEnum {
    KeyguardDisabledFeatureUnspecified = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
,    Camera = "CAMERA"
,    Notifications = "NOTIFICATIONS"
,    UnredactedNotifications = "UNREDACTED_NOTIFICATIONS"
,    TrustAgents = "TRUST_AGENTS"
,    DisableFingerprint = "DISABLE_FINGERPRINT"
,    DisableRemoteInput = "DISABLE_REMOTE_INPUT"
,    Face = "FACE"
,    Iris = "IRIS"
,    Biometrics = "BIOMETRICS"
,    AllFeatures = "ALL_FEATURES"
}

export enum PolicyLocationModeEnum {
    LocationModeUnspecified = "LOCATION_MODE_UNSPECIFIED"
,    HighAccuracy = "HIGH_ACCURACY"
,    SensorsOnly = "SENSORS_ONLY"
,    BatterySaving = "BATTERY_SAVING"
,    Off = "OFF"
,    LocationUserChoice = "LOCATION_USER_CHOICE"
,    LocationEnforced = "LOCATION_ENFORCED"
,    LocationDisabled = "LOCATION_DISABLED"
}

export enum PolicyMicrophoneAccessEnum {
    MicrophoneAccessUnspecified = "MICROPHONE_ACCESS_UNSPECIFIED"
,    MicrophoneAccessUserChoice = "MICROPHONE_ACCESS_USER_CHOICE"
,    MicrophoneAccessDisabled = "MICROPHONE_ACCESS_DISABLED"
,    MicrophoneAccessEnforced = "MICROPHONE_ACCESS_ENFORCED"
}

export enum PolicyPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED"
,    Whitelist = "WHITELIST"
,    Blacklist = "BLACKLIST"
}

export enum PolicyPreferentialNetworkServiceEnum {
    PreferentialNetworkServiceUnspecified = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED"
,    PreferentialNetworkServiceDisabled = "PREFERENTIAL_NETWORK_SERVICE_DISABLED"
,    PreferentialNetworkServiceEnabled = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"
}

export enum PolicyStayOnPluggedModesEnum {
    BatteryPluggedModeUnspecified = "BATTERY_PLUGGED_MODE_UNSPECIFIED"
,    Ac = "AC"
,    Usb = "USB"
,    Wireless = "WIRELESS"
}


// Policy
/** 
 * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountTypesWithManagementDisabled" })
  accountTypesWithManagementDisabled?: string[];

  @Metadata({ data: "json, name=addUserDisabled" })
  addUserDisabled?: boolean;

  @Metadata({ data: "json, name=adjustVolumeDisabled" })
  adjustVolumeDisabled?: boolean;

  @Metadata({ data: "json, name=advancedSecurityOverrides" })
  advancedSecurityOverrides?: AdvancedSecurityOverrides;

  @Metadata({ data: "json, name=alwaysOnVpnPackage" })
  alwaysOnVpnPackage?: AlwaysOnVpnPackage;

  @Metadata({ data: "json, name=androidDevicePolicyTracks" })
  androidDevicePolicyTracks?: PolicyAndroidDevicePolicyTracksEnum[];

  @Metadata({ data: "json, name=appAutoUpdatePolicy" })
  appAutoUpdatePolicy?: PolicyAppAutoUpdatePolicyEnum;

  @Metadata({ data: "json, name=applications", elemType: shared.ApplicationPolicy })
  applications?: ApplicationPolicy[];

  @Metadata({ data: "json, name=autoDateAndTimeZone" })
  autoDateAndTimeZone?: PolicyAutoDateAndTimeZoneEnum;

  @Metadata({ data: "json, name=autoTimeRequired" })
  autoTimeRequired?: boolean;

  @Metadata({ data: "json, name=blockApplicationsEnabled" })
  blockApplicationsEnabled?: boolean;

  @Metadata({ data: "json, name=bluetoothConfigDisabled" })
  bluetoothConfigDisabled?: boolean;

  @Metadata({ data: "json, name=bluetoothContactSharingDisabled" })
  bluetoothContactSharingDisabled?: boolean;

  @Metadata({ data: "json, name=bluetoothDisabled" })
  bluetoothDisabled?: boolean;

  @Metadata({ data: "json, name=cameraAccess" })
  cameraAccess?: PolicyCameraAccessEnum;

  @Metadata({ data: "json, name=cameraDisabled" })
  cameraDisabled?: boolean;

  @Metadata({ data: "json, name=cellBroadcastsConfigDisabled" })
  cellBroadcastsConfigDisabled?: boolean;

  @Metadata({ data: "json, name=choosePrivateKeyRules", elemType: shared.ChoosePrivateKeyRule })
  choosePrivateKeyRules?: ChoosePrivateKeyRule[];

  @Metadata({ data: "json, name=complianceRules", elemType: shared.ComplianceRule })
  complianceRules?: ComplianceRule[];

  @Metadata({ data: "json, name=createWindowsDisabled" })
  createWindowsDisabled?: boolean;

  @Metadata({ data: "json, name=credentialsConfigDisabled" })
  credentialsConfigDisabled?: boolean;

  @Metadata({ data: "json, name=crossProfilePolicies" })
  crossProfilePolicies?: CrossProfilePolicies;

  @Metadata({ data: "json, name=dataRoamingDisabled" })
  dataRoamingDisabled?: boolean;

  @Metadata({ data: "json, name=debuggingFeaturesAllowed" })
  debuggingFeaturesAllowed?: boolean;

  @Metadata({ data: "json, name=defaultPermissionPolicy" })
  defaultPermissionPolicy?: PolicyDefaultPermissionPolicyEnum;

  @Metadata({ data: "json, name=deviceOwnerLockScreenInfo" })
  deviceOwnerLockScreenInfo?: UserFacingMessage;

  @Metadata({ data: "json, name=encryptionPolicy" })
  encryptionPolicy?: PolicyEncryptionPolicyEnum;

  @Metadata({ data: "json, name=ensureVerifyAppsEnabled" })
  ensureVerifyAppsEnabled?: boolean;

  @Metadata({ data: "json, name=factoryResetDisabled" })
  factoryResetDisabled?: boolean;

  @Metadata({ data: "json, name=frpAdminEmails" })
  frpAdminEmails?: string[];

  @Metadata({ data: "json, name=funDisabled" })
  funDisabled?: boolean;

  @Metadata({ data: "json, name=installAppsDisabled" })
  installAppsDisabled?: boolean;

  @Metadata({ data: "json, name=installUnknownSourcesAllowed" })
  installUnknownSourcesAllowed?: boolean;

  @Metadata({ data: "json, name=keyguardDisabled" })
  keyguardDisabled?: boolean;

  @Metadata({ data: "json, name=keyguardDisabledFeatures" })
  keyguardDisabledFeatures?: PolicyKeyguardDisabledFeaturesEnum[];

  @Metadata({ data: "json, name=kioskCustomLauncherEnabled" })
  kioskCustomLauncherEnabled?: boolean;

  @Metadata({ data: "json, name=kioskCustomization" })
  kioskCustomization?: KioskCustomization;

  @Metadata({ data: "json, name=locationMode" })
  locationMode?: PolicyLocationModeEnum;

  @Metadata({ data: "json, name=longSupportMessage" })
  longSupportMessage?: UserFacingMessage;

  @Metadata({ data: "json, name=maximumTimeToLock" })
  maximumTimeToLock?: string;

  @Metadata({ data: "json, name=microphoneAccess" })
  microphoneAccess?: PolicyMicrophoneAccessEnum;

  @Metadata({ data: "json, name=minimumApiLevel" })
  minimumApiLevel?: number;

  @Metadata({ data: "json, name=mobileNetworksConfigDisabled" })
  mobileNetworksConfigDisabled?: boolean;

  @Metadata({ data: "json, name=modifyAccountsDisabled" })
  modifyAccountsDisabled?: boolean;

  @Metadata({ data: "json, name=mountPhysicalMediaDisabled" })
  mountPhysicalMediaDisabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkEscapeHatchEnabled" })
  networkEscapeHatchEnabled?: boolean;

  @Metadata({ data: "json, name=networkResetDisabled" })
  networkResetDisabled?: boolean;

  @Metadata({ data: "json, name=oncCertificateProviders", elemType: shared.OncCertificateProvider })
  oncCertificateProviders?: OncCertificateProvider[];

  @Metadata({ data: "json, name=openNetworkConfiguration" })
  openNetworkConfiguration?: Map<string, any>;

  @Metadata({ data: "json, name=outgoingBeamDisabled" })
  outgoingBeamDisabled?: boolean;

  @Metadata({ data: "json, name=outgoingCallsDisabled" })
  outgoingCallsDisabled?: boolean;

  @Metadata({ data: "json, name=passwordPolicies", elemType: shared.PasswordRequirements })
  passwordPolicies?: PasswordRequirements[];

  @Metadata({ data: "json, name=passwordRequirements" })
  passwordRequirements?: PasswordRequirements;

  @Metadata({ data: "json, name=permissionGrants", elemType: shared.PermissionGrant })
  permissionGrants?: PermissionGrant[];

  @Metadata({ data: "json, name=permittedAccessibilityServices" })
  permittedAccessibilityServices?: PackageNameList;

  @Metadata({ data: "json, name=permittedInputMethods" })
  permittedInputMethods?: PackageNameList;

  @Metadata({ data: "json, name=persistentPreferredActivities", elemType: shared.PersistentPreferredActivity })
  persistentPreferredActivities?: PersistentPreferredActivity[];

  @Metadata({ data: "json, name=personalUsagePolicies" })
  personalUsagePolicies?: PersonalUsagePolicies;

  @Metadata({ data: "json, name=playStoreMode" })
  playStoreMode?: PolicyPlayStoreModeEnum;

  @Metadata({ data: "json, name=policyEnforcementRules", elemType: shared.PolicyEnforcementRule })
  policyEnforcementRules?: PolicyEnforcementRule[];

  @Metadata({ data: "json, name=preferentialNetworkService" })
  preferentialNetworkService?: PolicyPreferentialNetworkServiceEnum;

  @Metadata({ data: "json, name=privateKeySelectionEnabled" })
  privateKeySelectionEnabled?: boolean;

  @Metadata({ data: "json, name=recommendedGlobalProxy" })
  recommendedGlobalProxy?: ProxyInfo;

  @Metadata({ data: "json, name=removeUserDisabled" })
  removeUserDisabled?: boolean;

  @Metadata({ data: "json, name=safeBootDisabled" })
  safeBootDisabled?: boolean;

  @Metadata({ data: "json, name=screenCaptureDisabled" })
  screenCaptureDisabled?: boolean;

  @Metadata({ data: "json, name=setUserIconDisabled" })
  setUserIconDisabled?: boolean;

  @Metadata({ data: "json, name=setWallpaperDisabled" })
  setWallpaperDisabled?: boolean;

  @Metadata({ data: "json, name=setupActions", elemType: shared.SetupAction })
  setupActions?: SetupAction[];

  @Metadata({ data: "json, name=shareLocationDisabled" })
  shareLocationDisabled?: boolean;

  @Metadata({ data: "json, name=shortSupportMessage" })
  shortSupportMessage?: UserFacingMessage;

  @Metadata({ data: "json, name=skipFirstUseHintsEnabled" })
  skipFirstUseHintsEnabled?: boolean;

  @Metadata({ data: "json, name=smsDisabled" })
  smsDisabled?: boolean;

  @Metadata({ data: "json, name=statusBarDisabled" })
  statusBarDisabled?: boolean;

  @Metadata({ data: "json, name=statusReportingSettings" })
  statusReportingSettings?: StatusReportingSettings;

  @Metadata({ data: "json, name=stayOnPluggedModes" })
  stayOnPluggedModes?: PolicyStayOnPluggedModesEnum[];

  @Metadata({ data: "json, name=systemUpdate" })
  systemUpdate?: SystemUpdate;

  @Metadata({ data: "json, name=tetheringConfigDisabled" })
  tetheringConfigDisabled?: boolean;

  @Metadata({ data: "json, name=uninstallAppsDisabled" })
  uninstallAppsDisabled?: boolean;

  @Metadata({ data: "json, name=unmuteMicrophoneDisabled" })
  unmuteMicrophoneDisabled?: boolean;

  @Metadata({ data: "json, name=usageLog" })
  usageLog?: UsageLog;

  @Metadata({ data: "json, name=usbFileTransferDisabled" })
  usbFileTransferDisabled?: boolean;

  @Metadata({ data: "json, name=usbMassStorageEnabled" })
  usbMassStorageEnabled?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=vpnConfigDisabled" })
  vpnConfigDisabled?: boolean;

  @Metadata({ data: "json, name=wifiConfigDisabled" })
  wifiConfigDisabled?: boolean;

  @Metadata({ data: "json, name=wifiConfigsLockdownEnabled" })
  wifiConfigsLockdownEnabled?: boolean;
}
