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
export var GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum;
(function (GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum) {
    GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum["AcquisitionConversionEventLookbackWindowUnspecified"] = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum["AcquisitionConversionEventLookbackWindow7Days"] = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS";
    GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum["AcquisitionConversionEventLookbackWindow30Days"] = "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS";
})(GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum || (GoogleAnalyticsAdminV1alphaAttributionSettingsAcquisitionConversionEventLookbackWindowEnum = {}));
export var GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum;
(function (GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum) {
    GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum["OtherConversionEventLookbackWindowUnspecified"] = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum["OtherConversionEventLookbackWindow30Days"] = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS";
    GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum["OtherConversionEventLookbackWindow60Days"] = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS";
    GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum["OtherConversionEventLookbackWindow90Days"] = "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS";
})(GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum || (GoogleAnalyticsAdminV1alphaAttributionSettingsOtherConversionEventLookbackWindowEnum = {}));
export var GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum;
(function (GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum) {
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["ReportingAttributionModelUnspecified"] = "REPORTING_ATTRIBUTION_MODEL_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["CrossChannelDataDriven"] = "CROSS_CHANNEL_DATA_DRIVEN";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["CrossChannelLastClick"] = "CROSS_CHANNEL_LAST_CLICK";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["CrossChannelFirstClick"] = "CROSS_CHANNEL_FIRST_CLICK";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["CrossChannelLinear"] = "CROSS_CHANNEL_LINEAR";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["CrossChannelPositionBased"] = "CROSS_CHANNEL_POSITION_BASED";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["CrossChannelTimeDecay"] = "CROSS_CHANNEL_TIME_DECAY";
    GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum["AdsPreferredLastClick"] = "ADS_PREFERRED_LAST_CLICK";
})(GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum || (GoogleAnalyticsAdminV1alphaAttributionSettingsReportingAttributionModelEnum = {}));
// GoogleAnalyticsAdminV1alphaAttributionSettings
/**
 * The attribution settings used for a given property. This is a singleton resource.
**/
var GoogleAnalyticsAdminV1alphaAttributionSettings = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAttributionSettings, _super);
    function GoogleAnalyticsAdminV1alphaAttributionSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquisitionConversionEventLookbackWindow" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAttributionSettings.prototype, "acquisitionConversionEventLookbackWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAttributionSettings.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherConversionEventLookbackWindow" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAttributionSettings.prototype, "otherConversionEventLookbackWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportingAttributionModel" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAttributionSettings.prototype, "reportingAttributionModel", void 0);
    return GoogleAnalyticsAdminV1alphaAttributionSettings;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAttributionSettings };
