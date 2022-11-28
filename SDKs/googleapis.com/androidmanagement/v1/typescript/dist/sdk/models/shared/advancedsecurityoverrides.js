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
export var AdvancedSecurityOverridesCommonCriteriaModeEnum;
(function (AdvancedSecurityOverridesCommonCriteriaModeEnum) {
    AdvancedSecurityOverridesCommonCriteriaModeEnum["CommonCriteriaModeUnspecified"] = "COMMON_CRITERIA_MODE_UNSPECIFIED";
    AdvancedSecurityOverridesCommonCriteriaModeEnum["CommonCriteriaModeDisabled"] = "COMMON_CRITERIA_MODE_DISABLED";
    AdvancedSecurityOverridesCommonCriteriaModeEnum["CommonCriteriaModeEnabled"] = "COMMON_CRITERIA_MODE_ENABLED";
})(AdvancedSecurityOverridesCommonCriteriaModeEnum || (AdvancedSecurityOverridesCommonCriteriaModeEnum = {}));
export var AdvancedSecurityOverridesDeveloperSettingsEnum;
(function (AdvancedSecurityOverridesDeveloperSettingsEnum) {
    AdvancedSecurityOverridesDeveloperSettingsEnum["DeveloperSettingsUnspecified"] = "DEVELOPER_SETTINGS_UNSPECIFIED";
    AdvancedSecurityOverridesDeveloperSettingsEnum["DeveloperSettingsDisabled"] = "DEVELOPER_SETTINGS_DISABLED";
    AdvancedSecurityOverridesDeveloperSettingsEnum["DeveloperSettingsAllowed"] = "DEVELOPER_SETTINGS_ALLOWED";
})(AdvancedSecurityOverridesDeveloperSettingsEnum || (AdvancedSecurityOverridesDeveloperSettingsEnum = {}));
export var AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum;
(function (AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum) {
    AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum["GooglePlayProtectVerifyAppsUnspecified"] = "GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED";
    AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum["VerifyAppsEnforced"] = "VERIFY_APPS_ENFORCED";
    AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum["VerifyAppsUserChoice"] = "VERIFY_APPS_USER_CHOICE";
})(AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum || (AdvancedSecurityOverridesGooglePlayProtectVerifyAppsEnum = {}));
export var AdvancedSecurityOverridesUntrustedAppsPolicyEnum;
(function (AdvancedSecurityOverridesUntrustedAppsPolicyEnum) {
    AdvancedSecurityOverridesUntrustedAppsPolicyEnum["UntrustedAppsPolicyUnspecified"] = "UNTRUSTED_APPS_POLICY_UNSPECIFIED";
    AdvancedSecurityOverridesUntrustedAppsPolicyEnum["DisallowInstall"] = "DISALLOW_INSTALL";
    AdvancedSecurityOverridesUntrustedAppsPolicyEnum["AllowInstallInPersonalProfileOnly"] = "ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY";
    AdvancedSecurityOverridesUntrustedAppsPolicyEnum["AllowInstallDeviceWide"] = "ALLOW_INSTALL_DEVICE_WIDE";
})(AdvancedSecurityOverridesUntrustedAppsPolicyEnum || (AdvancedSecurityOverridesUntrustedAppsPolicyEnum = {}));
// AdvancedSecurityOverrides
/**
 * Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.
**/
var AdvancedSecurityOverrides = /** @class */ (function (_super) {
    __extends(AdvancedSecurityOverrides, _super);
    function AdvancedSecurityOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonCriteriaMode" }),
        __metadata("design:type", String)
    ], AdvancedSecurityOverrides.prototype, "commonCriteriaMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=developerSettings" }),
        __metadata("design:type", String)
    ], AdvancedSecurityOverrides.prototype, "developerSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googlePlayProtectVerifyApps" }),
        __metadata("design:type", String)
    ], AdvancedSecurityOverrides.prototype, "googlePlayProtectVerifyApps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalAppsThatCanReadWorkNotifications" }),
        __metadata("design:type", Array)
    ], AdvancedSecurityOverrides.prototype, "personalAppsThatCanReadWorkNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=untrustedAppsPolicy" }),
        __metadata("design:type", String)
    ], AdvancedSecurityOverrides.prototype, "untrustedAppsPolicy", void 0);
    return AdvancedSecurityOverrides;
}(SpeakeasyBase));
export { AdvancedSecurityOverrides };
