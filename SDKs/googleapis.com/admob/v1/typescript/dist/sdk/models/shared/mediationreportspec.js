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
import { DateRange } from "./daterange";
import { MediationReportSpecDimensionFilter } from "./mediationreportspecdimensionfilter";
import { LocalizationSettings } from "./localizationsettings";
import { MediationReportSpecSortCondition } from "./mediationreportspecsortcondition";
export var MediationReportSpecDimensionsEnum;
(function (MediationReportSpecDimensionsEnum) {
    MediationReportSpecDimensionsEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    MediationReportSpecDimensionsEnum["Date"] = "DATE";
    MediationReportSpecDimensionsEnum["Month"] = "MONTH";
    MediationReportSpecDimensionsEnum["Week"] = "WEEK";
    MediationReportSpecDimensionsEnum["AdSource"] = "AD_SOURCE";
    MediationReportSpecDimensionsEnum["AdSourceInstance"] = "AD_SOURCE_INSTANCE";
    MediationReportSpecDimensionsEnum["AdUnit"] = "AD_UNIT";
    MediationReportSpecDimensionsEnum["App"] = "APP";
    MediationReportSpecDimensionsEnum["MediationGroup"] = "MEDIATION_GROUP";
    MediationReportSpecDimensionsEnum["Country"] = "COUNTRY";
    MediationReportSpecDimensionsEnum["Format"] = "FORMAT";
    MediationReportSpecDimensionsEnum["Platform"] = "PLATFORM";
    MediationReportSpecDimensionsEnum["MobileOsVersion"] = "MOBILE_OS_VERSION";
    MediationReportSpecDimensionsEnum["GmaSdkVersion"] = "GMA_SDK_VERSION";
    MediationReportSpecDimensionsEnum["AppVersionName"] = "APP_VERSION_NAME";
    MediationReportSpecDimensionsEnum["ServingRestriction"] = "SERVING_RESTRICTION";
})(MediationReportSpecDimensionsEnum || (MediationReportSpecDimensionsEnum = {}));
export var MediationReportSpecMetricsEnum;
(function (MediationReportSpecMetricsEnum) {
    MediationReportSpecMetricsEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    MediationReportSpecMetricsEnum["AdRequests"] = "AD_REQUESTS";
    MediationReportSpecMetricsEnum["Clicks"] = "CLICKS";
    MediationReportSpecMetricsEnum["EstimatedEarnings"] = "ESTIMATED_EARNINGS";
    MediationReportSpecMetricsEnum["Impressions"] = "IMPRESSIONS";
    MediationReportSpecMetricsEnum["ImpressionCtr"] = "IMPRESSION_CTR";
    MediationReportSpecMetricsEnum["MatchedRequests"] = "MATCHED_REQUESTS";
    MediationReportSpecMetricsEnum["MatchRate"] = "MATCH_RATE";
    MediationReportSpecMetricsEnum["ObservedEcpm"] = "OBSERVED_ECPM";
})(MediationReportSpecMetricsEnum || (MediationReportSpecMetricsEnum = {}));
// MediationReportSpec
/**
 * The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
**/
var MediationReportSpec = /** @class */ (function (_super) {
    __extends(MediationReportSpec, _super);
    function MediationReportSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], MediationReportSpec.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: MediationReportSpecDimensionFilter }),
        __metadata("design:type", Array)
    ], MediationReportSpec.prototype, "dimensionFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Array)
    ], MediationReportSpec.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizationSettings" }),
        __metadata("design:type", LocalizationSettings)
    ], MediationReportSpec.prototype, "localizationSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxReportRows" }),
        __metadata("design:type", Number)
    ], MediationReportSpec.prototype, "maxReportRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], MediationReportSpec.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortConditions", elemType: MediationReportSpecSortCondition }),
        __metadata("design:type", Array)
    ], MediationReportSpec.prototype, "sortConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], MediationReportSpec.prototype, "timeZone", void 0);
    return MediationReportSpec;
}(SpeakeasyBase));
export { MediationReportSpec };
