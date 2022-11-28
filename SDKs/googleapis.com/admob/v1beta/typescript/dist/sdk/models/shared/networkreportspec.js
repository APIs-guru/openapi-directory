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
import { NetworkReportSpecDimensionFilter } from "./networkreportspecdimensionfilter";
import { LocalizationSettings } from "./localizationsettings";
import { NetworkReportSpecSortCondition } from "./networkreportspecsortcondition";
export var NetworkReportSpecDimensionsEnum;
(function (NetworkReportSpecDimensionsEnum) {
    NetworkReportSpecDimensionsEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    NetworkReportSpecDimensionsEnum["Date"] = "DATE";
    NetworkReportSpecDimensionsEnum["Month"] = "MONTH";
    NetworkReportSpecDimensionsEnum["Week"] = "WEEK";
    NetworkReportSpecDimensionsEnum["AdUnit"] = "AD_UNIT";
    NetworkReportSpecDimensionsEnum["App"] = "APP";
    NetworkReportSpecDimensionsEnum["AdType"] = "AD_TYPE";
    NetworkReportSpecDimensionsEnum["Country"] = "COUNTRY";
    NetworkReportSpecDimensionsEnum["Format"] = "FORMAT";
    NetworkReportSpecDimensionsEnum["Platform"] = "PLATFORM";
    NetworkReportSpecDimensionsEnum["MobileOsVersion"] = "MOBILE_OS_VERSION";
    NetworkReportSpecDimensionsEnum["GmaSdkVersion"] = "GMA_SDK_VERSION";
    NetworkReportSpecDimensionsEnum["AppVersionName"] = "APP_VERSION_NAME";
    NetworkReportSpecDimensionsEnum["ServingRestriction"] = "SERVING_RESTRICTION";
})(NetworkReportSpecDimensionsEnum || (NetworkReportSpecDimensionsEnum = {}));
export var NetworkReportSpecMetricsEnum;
(function (NetworkReportSpecMetricsEnum) {
    NetworkReportSpecMetricsEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    NetworkReportSpecMetricsEnum["AdRequests"] = "AD_REQUESTS";
    NetworkReportSpecMetricsEnum["Clicks"] = "CLICKS";
    NetworkReportSpecMetricsEnum["EstimatedEarnings"] = "ESTIMATED_EARNINGS";
    NetworkReportSpecMetricsEnum["Impressions"] = "IMPRESSIONS";
    NetworkReportSpecMetricsEnum["ImpressionCtr"] = "IMPRESSION_CTR";
    NetworkReportSpecMetricsEnum["ImpressionRpm"] = "IMPRESSION_RPM";
    NetworkReportSpecMetricsEnum["MatchedRequests"] = "MATCHED_REQUESTS";
    NetworkReportSpecMetricsEnum["MatchRate"] = "MATCH_RATE";
    NetworkReportSpecMetricsEnum["ShowRate"] = "SHOW_RATE";
})(NetworkReportSpecMetricsEnum || (NetworkReportSpecMetricsEnum = {}));
// NetworkReportSpec
/**
 * The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;
**/
var NetworkReportSpec = /** @class */ (function (_super) {
    __extends(NetworkReportSpec, _super);
    function NetworkReportSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], NetworkReportSpec.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: NetworkReportSpecDimensionFilter }),
        __metadata("design:type", Array)
    ], NetworkReportSpec.prototype, "dimensionFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Array)
    ], NetworkReportSpec.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localizationSettings" }),
        __metadata("design:type", LocalizationSettings)
    ], NetworkReportSpec.prototype, "localizationSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxReportRows" }),
        __metadata("design:type", Number)
    ], NetworkReportSpec.prototype, "maxReportRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", Array)
    ], NetworkReportSpec.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortConditions", elemType: NetworkReportSpecSortCondition }),
        __metadata("design:type", Array)
    ], NetworkReportSpec.prototype, "sortConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], NetworkReportSpec.prototype, "timeZone", void 0);
    return NetworkReportSpec;
}(SpeakeasyBase));
export { NetworkReportSpec };
