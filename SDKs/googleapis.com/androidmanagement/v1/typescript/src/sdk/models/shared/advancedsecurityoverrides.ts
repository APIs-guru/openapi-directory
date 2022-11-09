import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdvancedSecurityOverridesCommonCriteriaModeEnum {
    CommonCriteriaModeUnspecified = "COMMON_CRITERIA_MODE_UNSPECIFIED"
,    CommonCriteriaModeDisabled = "COMMON_CRITERIA_MODE_DISABLED"
,    CommonCriteriaModeEnabled = "COMMON_CRITERIA_MODE_ENABLED"
}

export enum AdvancedSecurityOverridesDeveloperSettingsEnum {
    DeveloperSettingsUnspecified = "DEVELOPER_SETTINGS_UNSPECIFIED"
,    DeveloperSettingsDisabled = "DEVELOPER_SETTINGS_DISABLED"
,    DeveloperSettingsAllowed = "DEVELOPER_SETTINGS_ALLOWED"
}

export enum AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum {
    GooglePlayProtectVerifyAppsUnspecified = "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED"
,    VerifyAppsEnforced = "VERIFY_APPS_ENFORCED"
,    VerifyAppsUserChoice = "VERIFY_APPS_USER_CHOICE"
}

export enum AdvancedSecurityOverridesUntrustedAppsPolicyEnum {
    UntrustedAppsPolicyUnspecified = "UNTRUSTED_APPS_POLICY_UNSPECIFIED"
,    DisallowInstall = "DISALLOW_INSTALL"
,    AllowInstallInPersonalProfileOnly = "ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY"
,    AllowInstallDeviceWide = "ALLOW_INSTALL_DEVICE_WIDE"
}


// AdvancedSecurityOverrides
/** 
 * Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
**/
export class AdvancedSecurityOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonCriteriaMode" })
  commonCriteriaMode?: AdvancedSecurityOverridesCommonCriteriaModeEnum;

  @Metadata({ data: "json, name=developerSettings" })
  developerSettings?: AdvancedSecurityOverridesDeveloperSettingsEnum;

  @Metadata({ data: "json, name=googlePlayProtectVerifyApps" })
  googlePlayProtectVerifyApps?: AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum;

  @Metadata({ data: "json, name=personalAppsThatCanReadWorkNotifications" })
  personalAppsThatCanReadWorkNotifications?: string[];

  @Metadata({ data: "json, name=untrustedAppsPolicy" })
  untrustedAppsPolicy?: AdvancedSecurityOverridesUntrustedAppsPolicyEnum;
}
