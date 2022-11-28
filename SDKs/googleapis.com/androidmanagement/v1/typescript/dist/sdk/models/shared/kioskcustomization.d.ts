import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KioskCustomizationDeviceSettingsEnum {
    DeviceSettingsUnspecified = "DEVICE_SETTINGS_UNSPECIFIED",
    SettingsAccessAllowed = "SETTINGS_ACCESS_ALLOWED",
    SettingsAccessBlocked = "SETTINGS_ACCESS_BLOCKED"
}
export declare enum KioskCustomizationPowerButtonActionsEnum {
    PowerButtonActionsUnspecified = "POWER_BUTTON_ACTIONS_UNSPECIFIED",
    PowerButtonAvailable = "POWER_BUTTON_AVAILABLE",
    PowerButtonBlocked = "POWER_BUTTON_BLOCKED"
}
export declare enum KioskCustomizationStatusBarEnum {
    StatusBarUnspecified = "STATUS_BAR_UNSPECIFIED",
    NotificationsAndSystemInfoEnabled = "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED",
    NotificationsAndSystemInfoDisabled = "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED",
    SystemInfoOnly = "SYSTEM_INFO_ONLY"
}
export declare enum KioskCustomizationSystemErrorWarningsEnum {
    SystemErrorWarningsUnspecified = "SYSTEM_ERROR_WARNINGS_UNSPECIFIED",
    ErrorAndWarningsEnabled = "ERROR_AND_WARNINGS_ENABLED",
    ErrorAndWarningsMuted = "ERROR_AND_WARNINGS_MUTED"
}
export declare enum KioskCustomizationSystemNavigationEnum {
    SystemNavigationUnspecified = "SYSTEM_NAVIGATION_UNSPECIFIED",
    NavigationEnabled = "NAVIGATION_ENABLED",
    NavigationDisabled = "NAVIGATION_DISABLED",
    HomeButtonOnly = "HOME_BUTTON_ONLY"
}
/**
 * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
**/
export declare class KioskCustomization extends SpeakeasyBase {
    deviceSettings?: KioskCustomizationDeviceSettingsEnum;
    powerButtonActions?: KioskCustomizationPowerButtonActionsEnum;
    statusBar?: KioskCustomizationStatusBarEnum;
    systemErrorWarnings?: KioskCustomizationSystemErrorWarningsEnum;
    systemNavigation?: KioskCustomizationSystemNavigationEnum;
}
