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
export var PasswordRequirementsPasswordQualityEnum;
(function (PasswordRequirementsPasswordQualityEnum) {
    PasswordRequirementsPasswordQualityEnum["PasswordQualityUnspecified"] = "PASSWORD_QUALITY_UNSPECIFIED";
    PasswordRequirementsPasswordQualityEnum["BiometricWeak"] = "BIOMETRIC_WEAK";
    PasswordRequirementsPasswordQualityEnum["Something"] = "SOMETHING";
    PasswordRequirementsPasswordQualityEnum["Numeric"] = "NUMERIC";
    PasswordRequirementsPasswordQualityEnum["NumericComplex"] = "NUMERIC_COMPLEX";
    PasswordRequirementsPasswordQualityEnum["Alphabetic"] = "ALPHABETIC";
    PasswordRequirementsPasswordQualityEnum["Alphanumeric"] = "ALPHANUMERIC";
    PasswordRequirementsPasswordQualityEnum["Complex"] = "COMPLEX";
    PasswordRequirementsPasswordQualityEnum["ComplexityLow"] = "COMPLEXITY_LOW";
    PasswordRequirementsPasswordQualityEnum["ComplexityMedium"] = "COMPLEXITY_MEDIUM";
    PasswordRequirementsPasswordQualityEnum["ComplexityHigh"] = "COMPLEXITY_HIGH";
})(PasswordRequirementsPasswordQualityEnum || (PasswordRequirementsPasswordQualityEnum = {}));
export var PasswordRequirementsPasswordScopeEnum;
(function (PasswordRequirementsPasswordScopeEnum) {
    PasswordRequirementsPasswordScopeEnum["ScopeUnspecified"] = "SCOPE_UNSPECIFIED";
    PasswordRequirementsPasswordScopeEnum["ScopeDevice"] = "SCOPE_DEVICE";
    PasswordRequirementsPasswordScopeEnum["ScopeProfile"] = "SCOPE_PROFILE";
})(PasswordRequirementsPasswordScopeEnum || (PasswordRequirementsPasswordScopeEnum = {}));
export var PasswordRequirementsRequirePasswordUnlockEnum;
(function (PasswordRequirementsRequirePasswordUnlockEnum) {
    PasswordRequirementsRequirePasswordUnlockEnum["RequirePasswordUnlockUnspecified"] = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED";
    PasswordRequirementsRequirePasswordUnlockEnum["UseDefaultDeviceTimeout"] = "USE_DEFAULT_DEVICE_TIMEOUT";
    PasswordRequirementsRequirePasswordUnlockEnum["RequireEveryDay"] = "REQUIRE_EVERY_DAY";
})(PasswordRequirementsRequirePasswordUnlockEnum || (PasswordRequirementsRequirePasswordUnlockEnum = {}));
export var PasswordRequirementsUnifiedLockSettingsEnum;
(function (PasswordRequirementsUnifiedLockSettingsEnum) {
    PasswordRequirementsUnifiedLockSettingsEnum["UnifiedLockSettingsUnspecified"] = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED";
    PasswordRequirementsUnifiedLockSettingsEnum["AllowUnifiedWorkAndPersonalLock"] = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK";
    PasswordRequirementsUnifiedLockSettingsEnum["RequireSeparateWorkLock"] = "REQUIRE_SEPARATE_WORK_LOCK";
})(PasswordRequirementsUnifiedLockSettingsEnum || (PasswordRequirementsUnifiedLockSettingsEnum = {}));
// PasswordRequirements
/**
 * Requirements for the password used to unlock a device.
**/
var PasswordRequirements = /** @class */ (function (_super) {
    __extends(PasswordRequirements, _super);
    function PasswordRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumFailedPasswordsForWipe" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "maximumFailedPasswordsForWipe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordExpirationTimeout" }),
        __metadata("design:type", String)
    ], PasswordRequirements.prototype, "passwordExpirationTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordHistoryLength" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordHistoryLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumLength" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumLetters" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumLetters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumLowerCase" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumLowerCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumNonLetter" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumNonLetter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumNumeric" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumNumeric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumSymbols" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumSymbols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordMinimumUpperCase" }),
        __metadata("design:type", Number)
    ], PasswordRequirements.prototype, "passwordMinimumUpperCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordQuality" }),
        __metadata("design:type", String)
    ], PasswordRequirements.prototype, "passwordQuality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordScope" }),
        __metadata("design:type", String)
    ], PasswordRequirements.prototype, "passwordScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirePasswordUnlock" }),
        __metadata("design:type", String)
    ], PasswordRequirements.prototype, "requirePasswordUnlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unifiedLockSettings" }),
        __metadata("design:type", String)
    ], PasswordRequirements.prototype, "unifiedLockSettings", void 0);
    return PasswordRequirements;
}(SpeakeasyBase));
export { PasswordRequirements };
