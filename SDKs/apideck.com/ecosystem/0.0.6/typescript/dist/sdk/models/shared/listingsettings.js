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
export var ListingSettingsNamingEnum;
(function (ListingSettingsNamingEnum) {
    ListingSettingsNamingEnum["Listing"] = "LISTING";
    ListingSettingsNamingEnum["Listings"] = "LISTINGS";
    ListingSettingsNamingEnum["Integrations"] = "INTEGRATIONS";
    ListingSettingsNamingEnum["Apps"] = "APPS";
    ListingSettingsNamingEnum["Connectors"] = "CONNECTORS";
    ListingSettingsNamingEnum["Datasources"] = "DATASOURCES";
    ListingSettingsNamingEnum["Addons"] = "ADDONS";
    ListingSettingsNamingEnum["Plugins"] = "PLUGINS";
    ListingSettingsNamingEnum["Partners"] = "PARTNERS";
    ListingSettingsNamingEnum["Channels"] = "CHANNELS";
    ListingSettingsNamingEnum["Connections"] = "CONNECTIONS";
    ListingSettingsNamingEnum["Extensions"] = "EXTENSIONS";
})(ListingSettingsNamingEnum || (ListingSettingsNamingEnum = {}));
export var ListingSettingsSidebarPositionEnum;
(function (ListingSettingsSidebarPositionEnum) {
    ListingSettingsSidebarPositionEnum["Top"] = "TOP";
    ListingSettingsSidebarPositionEnum["Left"] = "LEFT";
    ListingSettingsSidebarPositionEnum["Right"] = "RIGHT";
    ListingSettingsSidebarPositionEnum["Hidden"] = "HIDDEN";
})(ListingSettingsSidebarPositionEnum || (ListingSettingsSidebarPositionEnum = {}));
var ListingSettings = /** @class */ (function (_super) {
    __extends(ListingSettings, _super);
    function ListingSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_text_template" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "descriptionTextTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_title" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "descriptionTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features_text_template" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "featuresTextTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features_title" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "featuresTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=install_button_label" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "installButtonLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name_postfix" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "namePostfix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=naming" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "naming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=native_integration_link" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "nativeIntegrationLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing_disabled" }),
        __metadata("design:type", Boolean)
    ], ListingSettings.prototype, "pricingDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing_text_template" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "pricingTextTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing_title" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "pricingTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sidebar_position" }),
        __metadata("design:type", String)
    ], ListingSettings.prototype, "sidebarPosition", void 0);
    return ListingSettings;
}(SpeakeasyBase));
export { ListingSettings };
