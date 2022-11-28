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
import { Repository } from "./repository";
var CheckSuitePreferencePreferencesAutoTriggerChecks = /** @class */ (function (_super) {
    __extends(CheckSuitePreferencePreferencesAutoTriggerChecks, _super);
    function CheckSuitePreferencePreferencesAutoTriggerChecks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_id" }),
        __metadata("design:type", Number)
    ], CheckSuitePreferencePreferencesAutoTriggerChecks.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setting" }),
        __metadata("design:type", Boolean)
    ], CheckSuitePreferencePreferencesAutoTriggerChecks.prototype, "setting", void 0);
    return CheckSuitePreferencePreferencesAutoTriggerChecks;
}(SpeakeasyBase));
export { CheckSuitePreferencePreferencesAutoTriggerChecks };
var CheckSuitePreferencePreferences = /** @class */ (function (_super) {
    __extends(CheckSuitePreferencePreferences, _super);
    function CheckSuitePreferencePreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_trigger_checks", elemType: CheckSuitePreferencePreferencesAutoTriggerChecks }),
        __metadata("design:type", Array)
    ], CheckSuitePreferencePreferences.prototype, "autoTriggerChecks", void 0);
    return CheckSuitePreferencePreferences;
}(SpeakeasyBase));
export { CheckSuitePreferencePreferences };
// CheckSuitePreference
/**
 * Check suite configuration preferences for a repository.
**/
var CheckSuitePreference = /** @class */ (function (_super) {
    __extends(CheckSuitePreference, _super);
    function CheckSuitePreference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", CheckSuitePreferencePreferences)
    ], CheckSuitePreference.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", Repository)
    ], CheckSuitePreference.prototype, "repository", void 0);
    return CheckSuitePreference;
}(SpeakeasyBase));
export { CheckSuitePreference };
