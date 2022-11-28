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
export var KioskCustomizationDeviceSettingsEnum;
(function (KioskCustomizationDeviceSettingsEnum) {
    KioskCustomizationDeviceSettingsEnum["DeviceSettingsUnspecified"] = "DEVICE_SETTINGS_UNSPECIFIED";
    KioskCustomizationDeviceSettingsEnum["SettingsAccessAllowed"] = "SETTINGS_ACCESS_ALLOWED";
    KioskCustomizationDeviceSettingsEnum["SettingsAccessBlocked"] = "SETTINGS_ACCESS_BLOCKED";
})(KioskCustomizationDeviceSettingsEnum || (KioskCustomizationDeviceSettingsEnum = {}));
export var KioskCustomizationPowerButtonActionsEnum;
(function (KioskCustomizationPowerButtonActionsEnum) {
    KioskCustomizationPowerButtonActionsEnum["PowerButtonActionsUnspecified"] = "POWER_BUTTON_ACTIONS_UNSPECIFIED";
    KioskCustomizationPowerButtonActionsEnum["PowerButtonAvailable"] = "POWER_BUTTON_AVAILABLE";
    KioskCustomizationPowerButtonActionsEnum["PowerButtonBlocked"] = "POWER_BUTTON_BLOCKED";
})(KioskCustomizationPowerButtonActionsEnum || (KioskCustomizationPowerButtonActionsEnum = {}));
export var KioskCustomizationStatusBarEnum;
(function (KioskCustomizationStatusBarEnum) {
    KioskCustomizationStatusBarEnum["StatusBarUnspecified"] = "STATUS_BAR_UNSPECIFIED";
    KioskCustomizationStatusBarEnum["NotificationsAndSystemInfoEnabled"] = "NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED";
    KioskCustomizationStatusBarEnum["NotificationsAndSystemInfoDisabled"] = "NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED";
    KioskCustomizationStatusBarEnum["SystemInfoOnly"] = "SYSTEM_INFO_ONLY";
})(KioskCustomizationStatusBarEnum || (KioskCustomizationStatusBarEnum = {}));
export var KioskCustomizationSystemErrorWarningsEnum;
(function (KioskCustomizationSystemErrorWarningsEnum) {
    KioskCustomizationSystemErrorWarningsEnum["SystemErrorWarningsUnspecified"] = "SYSTEM_ERROR_WARNINGS_UNSPECIFIED";
    KioskCustomizationSystemErrorWarningsEnum["ErrorAndWarningsEnabled"] = "ERROR_AND_WARNINGS_ENABLED";
    KioskCustomizationSystemErrorWarningsEnum["ErrorAndWarningsMuted"] = "ERROR_AND_WARNINGS_MUTED";
})(KioskCustomizationSystemErrorWarningsEnum || (KioskCustomizationSystemErrorWarningsEnum = {}));
export var KioskCustomizationSystemNavigationEnum;
(function (KioskCustomizationSystemNavigationEnum) {
    KioskCustomizationSystemNavigationEnum["SystemNavigationUnspecified"] = "SYSTEM_NAVIGATION_UNSPECIFIED";
    KioskCustomizationSystemNavigationEnum["NavigationEnabled"] = "NAVIGATION_ENABLED";
    KioskCustomizationSystemNavigationEnum["NavigationDisabled"] = "NAVIGATION_DISABLED";
    KioskCustomizationSystemNavigationEnum["HomeButtonOnly"] = "HOME_BUTTON_ONLY";
})(KioskCustomizationSystemNavigationEnum || (KioskCustomizationSystemNavigationEnum = {}));
// KioskCustomization
/**
 * Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.
**/
var KioskCustomization = /** @class */ (function (_super) {
    __extends(KioskCustomization, _super);
    function KioskCustomization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceSettings" }),
        __metadata("design:type", String)
    ], KioskCustomization.prototype, "deviceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerButtonActions" }),
        __metadata("design:type", String)
    ], KioskCustomization.prototype, "powerButtonActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusBar" }),
        __metadata("design:type", String)
    ], KioskCustomization.prototype, "statusBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemErrorWarnings" }),
        __metadata("design:type", String)
    ], KioskCustomization.prototype, "systemErrorWarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemNavigation" }),
        __metadata("design:type", String)
    ], KioskCustomization.prototype, "systemNavigation", void 0);
    return KioskCustomization;
}(SpeakeasyBase));
export { KioskCustomization };
