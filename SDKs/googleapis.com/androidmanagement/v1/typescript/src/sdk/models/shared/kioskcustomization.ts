import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KioskCustomizationDeviceSettingsEnum {
    DeviceSettingsUnspecified = "DEVICE_SETTINGS_UNSPECIFIED",
    SettingsAccessAllowed = "SETTINGS_ACCESS_ALLOWED",
    SettingsAccessBlocked = "SETTINGS_ACCESS_BLOCKED"
}

export enum KioskCustomizationPowerButtonActionsEnum {
    PowerButtonActionsUnspecified = "POWER_BUTTON_ACTIONS_UNSPECIFIED",
    PowerButtonAvailable = "POWER_BUTTON_AVAILABLE",
    PowerButtonBlocked = "POWER_BUTTON_BLOCKED"
}

export enum KioskCustomizationStatusBarEnum {
    StatusBarUnspecified = "STATUS_BAR_UNSPECIFIED",
    NotificationsAndSystemInfoEnabled = "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED",
    NotificationsAndSystemInfoDisabled = "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED",
    SystemInfoOnly = "SYSTEM_INFO_ONLY"
}

export enum KioskCustomizationSystemErrorWarningsEnum {
    SystemErrorWarningsUnspecified = "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
    ErrorAndWarningsEnabled = "ERROR_AND_WARNINGS_ENABLED",
    ErrorAndWarningsMuted = "ERROR_AND_WARNINGS_MUTED"
}

export enum KioskCustomizationSystemNavigationEnum {
    SystemNavigationUnspecified = "SYSTEM_NAVIGATION_UNSPECIFIED",
    NavigationEnabled = "NAVIGATION_ENABLED",
    NavigationDisabled = "NAVIGATION_DISABLED",
    HomeButtonOnly = "HOME_BUTTON_ONLY"
}


// KioskCustomization
/** 
 * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
**/
export class KioskCustomization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceSettings" })
  deviceSettings?: KioskCustomizationDeviceSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=powerButtonActions" })
  powerButtonActions?: KioskCustomizationPowerButtonActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=statusBar" })
  statusBar?: KioskCustomizationStatusBarEnum;

  @SpeakeasyMetadata({ data: "json, name=systemErrorWarnings" })
  systemErrorWarnings?: KioskCustomizationSystemErrorWarningsEnum;

  @SpeakeasyMetadata({ data: "json, name=systemNavigation" })
  systemNavigation?: KioskCustomizationSystemNavigationEnum;
}
