package shared

type KioskCustomizationDeviceSettingsEnum string

const (
	KioskCustomizationDeviceSettingsEnumDeviceSettingsUnspecified KioskCustomizationDeviceSettingsEnum = "DEVICE_SETTINGS_UNSPECIFIED"
	KioskCustomizationDeviceSettingsEnumSettingsAccessAllowed     KioskCustomizationDeviceSettingsEnum = "SETTINGS_ACCESS_ALLOWED"
	KioskCustomizationDeviceSettingsEnumSettingsAccessBlocked     KioskCustomizationDeviceSettingsEnum = "SETTINGS_ACCESS_BLOCKED"
)

type KioskCustomizationPowerButtonActionsEnum string

const (
	KioskCustomizationPowerButtonActionsEnumPowerButtonActionsUnspecified KioskCustomizationPowerButtonActionsEnum = "POWER_BUTTON_ACTIONS_UNSPECIFIED"
	KioskCustomizationPowerButtonActionsEnumPowerButtonAvailable          KioskCustomizationPowerButtonActionsEnum = "POWER_BUTTON_AVAILABLE"
	KioskCustomizationPowerButtonActionsEnumPowerButtonBlocked            KioskCustomizationPowerButtonActionsEnum = "POWER_BUTTON_BLOCKED"
)

type KioskCustomizationStatusBarEnum string

const (
	KioskCustomizationStatusBarEnumStatusBarUnspecified               KioskCustomizationStatusBarEnum = "STATUS_BAR_UNSPECIFIED"
	KioskCustomizationStatusBarEnumNotificationsAndSystemInfoEnabled  KioskCustomizationStatusBarEnum = "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED"
	KioskCustomizationStatusBarEnumNotificationsAndSystemInfoDisabled KioskCustomizationStatusBarEnum = "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED"
	KioskCustomizationStatusBarEnumSystemInfoOnly                     KioskCustomizationStatusBarEnum = "SYSTEM_INFO_ONLY"
)

type KioskCustomizationSystemErrorWarningsEnum string

const (
	KioskCustomizationSystemErrorWarningsEnumSystemErrorWarningsUnspecified KioskCustomizationSystemErrorWarningsEnum = "SYSTEM_ERROR_WARNINGS_UNSPECIFIED"
	KioskCustomizationSystemErrorWarningsEnumErrorAndWarningsEnabled        KioskCustomizationSystemErrorWarningsEnum = "ERROR_AND_WARNINGS_ENABLED"
	KioskCustomizationSystemErrorWarningsEnumErrorAndWarningsMuted          KioskCustomizationSystemErrorWarningsEnum = "ERROR_AND_WARNINGS_MUTED"
)

type KioskCustomizationSystemNavigationEnum string

const (
	KioskCustomizationSystemNavigationEnumSystemNavigationUnspecified KioskCustomizationSystemNavigationEnum = "SYSTEM_NAVIGATION_UNSPECIFIED"
	KioskCustomizationSystemNavigationEnumNavigationEnabled           KioskCustomizationSystemNavigationEnum = "NAVIGATION_ENABLED"
	KioskCustomizationSystemNavigationEnumNavigationDisabled          KioskCustomizationSystemNavigationEnum = "NAVIGATION_DISABLED"
	KioskCustomizationSystemNavigationEnumHomeButtonOnly              KioskCustomizationSystemNavigationEnum = "HOME_BUTTON_ONLY"
)

// KioskCustomization
// Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
type KioskCustomization struct {
	DeviceSettings      *KioskCustomizationDeviceSettingsEnum      `json:"deviceSettings,omitempty"`
	PowerButtonActions  *KioskCustomizationPowerButtonActionsEnum  `json:"powerButtonActions,omitempty"`
	StatusBar           *KioskCustomizationStatusBarEnum           `json:"statusBar,omitempty"`
	SystemErrorWarnings *KioskCustomizationSystemErrorWarningsEnum `json:"systemErrorWarnings,omitempty"`
	SystemNavigation    *KioskCustomizationSystemNavigationEnum    `json:"systemNavigation,omitempty"`
}
