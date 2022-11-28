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
export var NetworkReportSpecSortConditionDimensionEnum;
(function (NetworkReportSpecSortConditionDimensionEnum) {
    NetworkReportSpecSortConditionDimensionEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    NetworkReportSpecSortConditionDimensionEnum["Date"] = "DATE";
    NetworkReportSpecSortConditionDimensionEnum["Month"] = "MONTH";
    NetworkReportSpecSortConditionDimensionEnum["Week"] = "WEEK";
    NetworkReportSpecSortConditionDimensionEnum["AdUnit"] = "AD_UNIT";
    NetworkReportSpecSortConditionDimensionEnum["App"] = "APP";
    NetworkReportSpecSortConditionDimensionEnum["AdType"] = "AD_TYPE";
    NetworkReportSpecSortConditionDimensionEnum["Country"] = "COUNTRY";
    NetworkReportSpecSortConditionDimensionEnum["Format"] = "FORMAT";
    NetworkReportSpecSortConditionDimensionEnum["Platform"] = "PLATFORM";
    NetworkReportSpecSortConditionDimensionEnum["MobileOsVersion"] = "MOBILE_OS_VERSION";
    NetworkReportSpecSortConditionDimensionEnum["GmaSdkVersion"] = "GMA_SDK_VERSION";
    NetworkReportSpecSortConditionDimensionEnum["AppVersionName"] = "APP_VERSION_NAME";
    NetworkReportSpecSortConditionDimensionEnum["ServingRestriction"] = "SERVING_RESTRICTION";
})(NetworkReportSpecSortConditionDimensionEnum || (NetworkReportSpecSortConditionDimensionEnum = {}));
export var NetworkReportSpecSortConditionMetricEnum;
(function (NetworkReportSpecSortConditionMetricEnum) {
    NetworkReportSpecSortConditionMetricEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    NetworkReportSpecSortConditionMetricEnum["AdRequests"] = "AD_REQUESTS";
    NetworkReportSpecSortConditionMetricEnum["Clicks"] = "CLICKS";
    NetworkReportSpecSortConditionMetricEnum["EstimatedEarnings"] = "ESTIMATED_EARNINGS";
    NetworkReportSpecSortConditionMetricEnum["Impressions"] = "IMPRESSIONS";
    NetworkReportSpecSortConditionMetricEnum["ImpressionCtr"] = "IMPRESSION_CTR";
    NetworkReportSpecSortConditionMetricEnum["ImpressionRpm"] = "IMPRESSION_RPM";
    NetworkReportSpecSortConditionMetricEnum["MatchedRequests"] = "MATCHED_REQUESTS";
    NetworkReportSpecSortConditionMetricEnum["MatchRate"] = "MATCH_RATE";
    NetworkReportSpecSortConditionMetricEnum["ShowRate"] = "SHOW_RATE";
})(NetworkReportSpecSortConditionMetricEnum || (NetworkReportSpecSortConditionMetricEnum = {}));
export var NetworkReportSpecSortConditionOrderEnum;
(function (NetworkReportSpecSortConditionOrderEnum) {
    NetworkReportSpecSortConditionOrderEnum["SortOrderUnspecified"] = "SORT_ORDER_UNSPECIFIED";
    NetworkReportSpecSortConditionOrderEnum["Ascending"] = "ASCENDING";
    NetworkReportSpecSortConditionOrderEnum["Descending"] = "DESCENDING";
})(NetworkReportSpecSortConditionOrderEnum || (NetworkReportSpecSortConditionOrderEnum = {}));
// NetworkReportSpecSortCondition
/**
 * Sorting direction to be applied on a dimension or a metric.
**/
var NetworkReportSpecSortCondition = /** @class */ (function (_super) {
    __extends(NetworkReportSpecSortCondition, _super);
    function NetworkReportSpecSortCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", String)
    ], NetworkReportSpecSortCondition.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", String)
    ], NetworkReportSpecSortCondition.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], NetworkReportSpecSortCondition.prototype, "order", void 0);
    return NetworkReportSpecSortCondition;
}(SpeakeasyBase));
export { NetworkReportSpecSortCondition };
