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
import { AdStyle } from "./adstyle";
// AdUnitContentAdsSettingsBackupOption
/**
 * The backup option to be used in instances where no ad is available.
**/
var AdUnitContentAdsSettingsBackupOption = /** @class */ (function (_super) {
    __extends(AdUnitContentAdsSettingsBackupOption, _super);
    function AdUnitContentAdsSettingsBackupOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], AdUnitContentAdsSettingsBackupOption.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AdUnitContentAdsSettingsBackupOption.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AdUnitContentAdsSettingsBackupOption.prototype, "url", void 0);
    return AdUnitContentAdsSettingsBackupOption;
}(SpeakeasyBase));
export { AdUnitContentAdsSettingsBackupOption };
// AdUnitContentAdsSettings
/**
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
**/
var AdUnitContentAdsSettings = /** @class */ (function (_super) {
    __extends(AdUnitContentAdsSettings, _super);
    function AdUnitContentAdsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupOption" }),
        __metadata("design:type", AdUnitContentAdsSettingsBackupOption)
    ], AdUnitContentAdsSettings.prototype, "backupOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AdUnitContentAdsSettings.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AdUnitContentAdsSettings.prototype, "type", void 0);
    return AdUnitContentAdsSettings;
}(SpeakeasyBase));
export { AdUnitContentAdsSettings };
// AdUnitMobileContentAdsSettings
/**
 * Settings specific to WAP mobile content ads (AFMC - deprecated).
**/
var AdUnitMobileContentAdsSettings = /** @class */ (function (_super) {
    __extends(AdUnitMobileContentAdsSettings, _super);
    function AdUnitMobileContentAdsSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=markupLanguage" }),
        __metadata("design:type", String)
    ], AdUnitMobileContentAdsSettings.prototype, "markupLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptingLanguage" }),
        __metadata("design:type", String)
    ], AdUnitMobileContentAdsSettings.prototype, "scriptingLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], AdUnitMobileContentAdsSettings.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AdUnitMobileContentAdsSettings.prototype, "type", void 0);
    return AdUnitMobileContentAdsSettings;
}(SpeakeasyBase));
export { AdUnitMobileContentAdsSettings };
var AdUnit = /** @class */ (function (_super) {
    __extends(AdUnit, _super);
    function AdUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], AdUnit.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentAdsSettings" }),
        __metadata("design:type", AdUnitContentAdsSettings)
    ], AdUnit.prototype, "contentAdsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customStyle" }),
        __metadata("design:type", AdStyle)
    ], AdUnit.prototype, "customStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AdUnit.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AdUnit.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobileContentAdsSettings" }),
        __metadata("design:type", AdUnitMobileContentAdsSettings)
    ], AdUnit.prototype, "mobileContentAdsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AdUnit.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AdUnit.prototype, "status", void 0);
    return AdUnit;
}(SpeakeasyBase));
export { AdUnit };
