var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export var PolicyAndroidDevicePolicyTracksEnum;
(function (PolicyAndroidDevicePolicyTracksEnum) {
    PolicyAndroidDevicePolicyTracksEnum["AppTrackUnspecified"] = "APP_TRACK_UNSPECIFIED";
    PolicyAndroidDevicePolicyTracksEnum["Production"] = "PRODUCTION";
    PolicyAndroidDevicePolicyTracksEnum["Beta"] = "BETA";
})(PolicyAndroidDevicePolicyTracksEnum || (PolicyAndroidDevicePolicyTracksEnum = {}));
export var PolicyAppAutoUpdatePolicyEnum;
(function (PolicyAppAutoUpdatePolicyEnum) {
    PolicyAppAutoUpdatePolicyEnum["AppAutoUpdatePolicyUnspecified"] = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED";
    PolicyAppAutoUpdatePolicyEnum["ChoiceToTheUser"] = "CHOICE_TO_THE_USER";
    PolicyAppAutoUpdatePolicyEnum["Never"] = "NEVER";
    PolicyAppAutoUpdatePolicyEnum["WifiOnly"] = "WIFI_ONLY";
    PolicyAppAutoUpdatePolicyEnum["Always"] = "ALWAYS";
})(PolicyAppAutoUpdatePolicyEnum || (PolicyAppAutoUpdatePolicyEnum = {}));
export var PolicyAutoDateAndTimeZoneEnum;
(function (PolicyAutoDateAndTimeZoneEnum) {
    PolicyAutoDateAndTimeZoneEnum["AutoDateAndTimeZoneUnspecified"] = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED";
    PolicyAutoDateAndTimeZoneEnum["AutoDateAndTimeZoneUserChoice"] = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE";
    PolicyAutoDateAndTimeZoneEnum["AutoDateAndTimeZoneEnforced"] = "AUTO_DATE_AND_TIME_ZONE_ENFORCED";
})(PolicyAutoDateAndTimeZoneEnum || (PolicyAutoDateAndTimeZoneEnum = {}));
export var PolicyCameraAccessEnum;
(function (PolicyCameraAccessEnum) {
    PolicyCameraAccessEnum["CameraAccessUnspecified"] = "CAMERA_ACCESS_UNSPECIFIED";
    PolicyCameraAccessEnum["CameraAccessUserChoice"] = "CAMERA_ACCESS_USER_CHOICE";
    PolicyCameraAccessEnum["CameraAccessDisabled"] = "CAMERA_ACCESS_DISABLED";
    PolicyCameraAccessEnum["CameraAccessEnforced"] = "CAMERA_ACCESS_ENFORCED";
})(PolicyCameraAccessEnum || (PolicyCameraAccessEnum = {}));
export var PolicyDefaultPermissionPolicyEnum;
(function (PolicyDefaultPermissionPolicyEnum) {
    PolicyDefaultPermissionPolicyEnum["PermissionPolicyUnspecified"] = "PERMISSION_POLICY_UNSPECIFIED";
    PolicyDefaultPermissionPolicyEnum["Prompt"] = "PROMPT";
    PolicyDefaultPermissionPolicyEnum["Grant"] = "GRANT";
    PolicyDefaultPermissionPolicyEnum["Deny"] = "DENY";
})(PolicyDefaultPermissionPolicyEnum || (PolicyDefaultPermissionPolicyEnum = {}));
export var PolicyEncryptionPolicyEnum;
(function (PolicyEncryptionPolicyEnum) {
    PolicyEncryptionPolicyEnum["EncryptionPolicyUnspecified"] = "ENCRYPTION_POLICY_UNSPECIFIED";
    PolicyEncryptionPolicyEnum["EnabledWithoutPassword"] = "ENABLED_WITHOUT_PASSWORD";
    PolicyEncryptionPolicyEnum["EnabledWithPassword"] = "ENABLED_WITH_PASSWORD";
})(PolicyEncryptionPolicyEnum || (PolicyEncryptionPolicyEnum = {}));
export var PolicyKeyguardDisabledFeaturesEnum;
(function (PolicyKeyguardDisabledFeaturesEnum) {
    PolicyKeyguardDisabledFeaturesEnum["KeyguardDisabledFeatureUnspecified"] = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED";
    PolicyKeyguardDisabledFeaturesEnum["Camera"] = "CAMERA";
    PolicyKeyguardDisabledFeaturesEnum["Notifications"] = "NOTIFICATIONS";
    PolicyKeyguardDisabledFeaturesEnum["UnredactedNotifications"] = "UNREDACTED_NOTIFICATIONS";
    PolicyKeyguardDisabledFeaturesEnum["TrustAgents"] = "TRUST_AGENTS";
    PolicyKeyguardDisabledFeaturesEnum["DisableFingerprint"] = "DISABLE_FINGERPRINT";
    PolicyKeyguardDisabledFeaturesEnum["DisableRemoteInput"] = "DISABLE_REMOTE_INPUT";
    PolicyKeyguardDisabledFeaturesEnum["Face"] = "FACE";
    PolicyKeyguardDisabledFeaturesEnum["Iris"] = "IRIS";
    PolicyKeyguardDisabledFeaturesEnum["Biometrics"] = "BIOMETRICS";
    PolicyKeyguardDisabledFeaturesEnum["AllFeatures"] = "ALL_FEATURES";
})(PolicyKeyguardDisabledFeaturesEnum || (PolicyKeyguardDisabledFeaturesEnum = {}));
export var PolicyLocationModeEnum;
(function (PolicyLocationModeEnum) {
    PolicyLocationModeEnum["LocationModeUnspecified"] = "LOCATION_MODE_UNSPECIFIED";
    PolicyLocationModeEnum["HighAccuracy"] = "HIGH_ACCURACY";
    PolicyLocationModeEnum["SensorsOnly"] = "SENSORS_ONLY";
    PolicyLocationModeEnum["BatterySaving"] = "BATTERY_SAVING";
    PolicyLocationModeEnum["Off"] = "OFF";
    PolicyLocationModeEnum["LocationUserChoice"] = "LOCATION_USER_CHOICE";
    PolicyLocationModeEnum["LocationEnforced"] = "LOCATION_ENFORCED";
    PolicyLocationModeEnum["LocationDisabled"] = "LOCATION_DISABLED";
})(PolicyLocationModeEnum || (PolicyLocationModeEnum = {}));
export var PolicyMicrophoneAccessEnum;
(function (PolicyMicrophoneAccessEnum) {
    PolicyMicrophoneAccessEnum["MicrophoneAccessUnspecified"] = "MICROPHONE_ACCESS_UNSPECIFIED";
    PolicyMicrophoneAccessEnum["MicrophoneAccessUserChoice"] = "MICROPHONE_ACCESS_USER_CHOICE";
    PolicyMicrophoneAccessEnum["MicrophoneAccessDisabled"] = "MICROPHONE_ACCESS_DISABLED";
    PolicyMicrophoneAccessEnum["MicrophoneAccessEnforced"] = "MICROPHONE_ACCESS_ENFORCED";
})(PolicyMicrophoneAccessEnum || (PolicyMicrophoneAccessEnum = {}));
export var PolicyPlayStoreModeEnum;
(function (PolicyPlayStoreModeEnum) {
    PolicyPlayStoreModeEnum["PlayStoreModeUnspecified"] = "PLAY_STORE_MODE_UNSPECIFIED";
    PolicyPlayStoreModeEnum["Whitelist"] = "WHITELIST";
    PolicyPlayStoreModeEnum["Blacklist"] = "BLACKLIST";
})(PolicyPlayStoreModeEnum || (PolicyPlayStoreModeEnum = {}));
export var PolicyPreferentialNetworkServiceEnum;
(function (PolicyPreferentialNetworkServiceEnum) {
    PolicyPreferentialNetworkServiceEnum["PreferentialNetworkServiceUnspecified"] = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED";
    PolicyPreferentialNetworkServiceEnum["PreferentialNetworkServiceDisabled"] = "PREFERENTIAL_NETWORK_SERVICE_DISABLED";
    PolicyPreferentialNetworkServiceEnum["PreferentialNetworkServiceEnabled"] = "PREFERENTIAL_NETWORK_SERVICE_ENABLED";
})(PolicyPreferentialNetworkServiceEnum || (PolicyPreferentialNetworkServiceEnum = {}));
export var PolicyStayOnPluggedModesEnum;
(function (PolicyStayOnPluggedModesEnum) {
    PolicyStayOnPluggedModesEnum["BatteryPluggedModeUnspecified"] = "BATTERY_PLUGGED_MODE_UNSPECIFIED";
    PolicyStayOnPluggedModesEnum["Ac"] = "AC";
    PolicyStayOnPluggedModesEnum["Usb"] = "USB";
    PolicyStayOnPluggedModesEnum["Wireless"] = "WIRELESS";
})(PolicyStayOnPluggedModesEnum || (PolicyStayOnPluggedModesEnum = {}));
// Policy
/**
 * A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
**/
var Policy = /** @class */ (function (_super) {
    __extends(Policy, _super);
    function Policy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountTypesWithManagementDisabled" }),
        __metadata("design:type", Array)
    ], Policy.prototype, "accountTypesWithManagementDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addUserDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "addUserDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustVolumeDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "adjustVolumeDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advancedSecurityOverrides" }),
        __metadata("design:type", AdvancedSecurityOverrides)
    ], Policy.prototype, "advancedSecurityOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alwaysOnVpnPackage" }),
        __metadata("design:type", AlwaysOnVpnPackage)
    ], Policy.prototype, "alwaysOnVpnPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidDevicePolicyTracks" }),
        __metadata("design:type", Array)
    ], Policy.prototype, "androidDevicePolicyTracks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appAutoUpdatePolicy" }),
        __metadata("design:type", String)
    ], Policy.prototype, "appAutoUpdatePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applications", elemType: ApplicationPolicy }),
        __metadata("design:type", Array)
    ], Policy.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoDateAndTimeZone" }),
        __metadata("design:type", String)
    ], Policy.prototype, "autoDateAndTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoTimeRequired" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "autoTimeRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockApplicationsEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "blockApplicationsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluetoothConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "bluetoothConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluetoothContactSharingDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "bluetoothContactSharingDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bluetoothDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "bluetoothDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cameraAccess" }),
        __metadata("design:type", String)
    ], Policy.prototype, "cameraAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cameraDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "cameraDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellBroadcastsConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "cellBroadcastsConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=choosePrivateKeyRules", elemType: ChoosePrivateKeyRule }),
        __metadata("design:type", Array)
    ], Policy.prototype, "choosePrivateKeyRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceRules", elemType: ComplianceRule }),
        __metadata("design:type", Array)
    ], Policy.prototype, "complianceRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createWindowsDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "createWindowsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialsConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "credentialsConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossProfilePolicies" }),
        __metadata("design:type", CrossProfilePolicies)
    ], Policy.prototype, "crossProfilePolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRoamingDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "dataRoamingDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debuggingFeaturesAllowed" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "debuggingFeaturesAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPermissionPolicy" }),
        __metadata("design:type", String)
    ], Policy.prototype, "defaultPermissionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceOwnerLockScreenInfo" }),
        __metadata("design:type", UserFacingMessage)
    ], Policy.prototype, "deviceOwnerLockScreenInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionPolicy" }),
        __metadata("design:type", String)
    ], Policy.prototype, "encryptionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ensureVerifyAppsEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "ensureVerifyAppsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=factoryResetDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "factoryResetDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frpAdminEmails" }),
        __metadata("design:type", Array)
    ], Policy.prototype, "frpAdminEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=funDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "funDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installAppsDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "installAppsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installUnknownSourcesAllowed" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "installUnknownSourcesAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyguardDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "keyguardDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyguardDisabledFeatures" }),
        __metadata("design:type", Array)
    ], Policy.prototype, "keyguardDisabledFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kioskCustomLauncherEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "kioskCustomLauncherEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kioskCustomization" }),
        __metadata("design:type", KioskCustomization)
    ], Policy.prototype, "kioskCustomization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationMode" }),
        __metadata("design:type", String)
    ], Policy.prototype, "locationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longSupportMessage" }),
        __metadata("design:type", UserFacingMessage)
    ], Policy.prototype, "longSupportMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumTimeToLock" }),
        __metadata("design:type", String)
    ], Policy.prototype, "maximumTimeToLock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=microphoneAccess" }),
        __metadata("design:type", String)
    ], Policy.prototype, "microphoneAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumApiLevel" }),
        __metadata("design:type", Number)
    ], Policy.prototype, "minimumApiLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileNetworksConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "mobileNetworksConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifyAccountsDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "modifyAccountsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mountPhysicalMediaDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "mountPhysicalMediaDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Policy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkEscapeHatchEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "networkEscapeHatchEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkResetDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "networkResetDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oncCertificateProviders", elemType: OncCertificateProvider }),
        __metadata("design:type", Array)
    ], Policy.prototype, "oncCertificateProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openNetworkConfiguration" }),
        __metadata("design:type", Map)
    ], Policy.prototype, "openNetworkConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoingBeamDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "outgoingBeamDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoingCallsDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "outgoingCallsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordPolicies", elemType: PasswordRequirements }),
        __metadata("design:type", Array)
    ], Policy.prototype, "passwordPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordRequirements" }),
        __metadata("design:type", PasswordRequirements)
    ], Policy.prototype, "passwordRequirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionGrants", elemType: PermissionGrant }),
        __metadata("design:type", Array)
    ], Policy.prototype, "permissionGrants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permittedAccessibilityServices" }),
        __metadata("design:type", PackageNameList)
    ], Policy.prototype, "permittedAccessibilityServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permittedInputMethods" }),
        __metadata("design:type", PackageNameList)
    ], Policy.prototype, "permittedInputMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistentPreferredActivities", elemType: PersistentPreferredActivity }),
        __metadata("design:type", Array)
    ], Policy.prototype, "persistentPreferredActivities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalUsagePolicies" }),
        __metadata("design:type", PersonalUsagePolicies)
    ], Policy.prototype, "personalUsagePolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playStoreMode" }),
        __metadata("design:type", String)
    ], Policy.prototype, "playStoreMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyEnforcementRules", elemType: PolicyEnforcementRule }),
        __metadata("design:type", Array)
    ], Policy.prototype, "policyEnforcementRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferentialNetworkService" }),
        __metadata("design:type", String)
    ], Policy.prototype, "preferentialNetworkService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateKeySelectionEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "privateKeySelectionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedGlobalProxy" }),
        __metadata("design:type", ProxyInfo)
    ], Policy.prototype, "recommendedGlobalProxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=removeUserDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "removeUserDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safeBootDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "safeBootDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenCaptureDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "screenCaptureDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setUserIconDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "setUserIconDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setWallpaperDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "setWallpaperDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setupActions", elemType: SetupAction }),
        __metadata("design:type", Array)
    ], Policy.prototype, "setupActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareLocationDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "shareLocationDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortSupportMessage" }),
        __metadata("design:type", UserFacingMessage)
    ], Policy.prototype, "shortSupportMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipFirstUseHintsEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "skipFirstUseHintsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smsDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "smsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusBarDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "statusBarDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusReportingSettings" }),
        __metadata("design:type", StatusReportingSettings)
    ], Policy.prototype, "statusReportingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stayOnPluggedModes" }),
        __metadata("design:type", Array)
    ], Policy.prototype, "stayOnPluggedModes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemUpdate" }),
        __metadata("design:type", SystemUpdate)
    ], Policy.prototype, "systemUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tetheringConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "tetheringConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uninstallAppsDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "uninstallAppsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unmuteMicrophoneDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "unmuteMicrophoneDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageLog" }),
        __metadata("design:type", UsageLog)
    ], Policy.prototype, "usageLog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usbFileTransferDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "usbFileTransferDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usbMassStorageEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "usbMassStorageEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Policy.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpnConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "vpnConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiConfigDisabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "wifiConfigDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiConfigsLockdownEnabled" }),
        __metadata("design:type", Boolean)
    ], Policy.prototype, "wifiConfigsLockdownEnabled", void 0);
    return Policy;
}(SpeakeasyBase));
export { Policy };
