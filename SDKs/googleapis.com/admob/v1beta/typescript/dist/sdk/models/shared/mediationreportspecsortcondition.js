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
export var MediationReportSpecSortConditionDimensionEnum;
(function (MediationReportSpecSortConditionDimensionEnum) {
    MediationReportSpecSortConditionDimensionEnum["DimensionUnspecified"] = "DIMENSION_UNSPECIFIED";
    MediationReportSpecSortConditionDimensionEnum["Date"] = "DATE";
    MediationReportSpecSortConditionDimensionEnum["Month"] = "MONTH";
    MediationReportSpecSortConditionDimensionEnum["Week"] = "WEEK";
    MediationReportSpecSortConditionDimensionEnum["AdSource"] = "AD_SOURCE";
    MediationReportSpecSortConditionDimensionEnum["AdSourceInstance"] = "AD_SOURCE_INSTANCE";
    MediationReportSpecSortConditionDimensionEnum["AdUnit"] = "AD_UNIT";
    MediationReportSpecSortConditionDimensionEnum["App"] = "APP";
    MediationReportSpecSortConditionDimensionEnum["MediationGroup"] = "MEDIATION_GROUP";
    MediationReportSpecSortConditionDimensionEnum["Country"] = "COUNTRY";
    MediationReportSpecSortConditionDimensionEnum["Format"] = "FORMAT";
    MediationReportSpecSortConditionDimensionEnum["Platform"] = "PLATFORM";
    MediationReportSpecSortConditionDimensionEnum["MobileOsVersion"] = "MOBILE_OS_VERSION";
    MediationReportSpecSortConditionDimensionEnum["GmaSdkVersion"] = "GMA_SDK_VERSION";
    MediationReportSpecSortConditionDimensionEnum["AppVersionName"] = "APP_VERSION_NAME";
    MediationReportSpecSortConditionDimensionEnum["ServingRestriction"] = "SERVING_RESTRICTION";
})(MediationReportSpecSortConditionDimensionEnum || (MediationReportSpecSortConditionDimensionEnum = {}));
export var MediationReportSpecSortConditionMetricEnum;
(function (MediationReportSpecSortConditionMetricEnum) {
    MediationReportSpecSortConditionMetricEnum["MetricUnspecified"] = "METRIC_UNSPECIFIED";
    MediationReportSpecSortConditionMetricEnum["AdRequests"] = "AD_REQUESTS";
    MediationReportSpecSortConditionMetricEnum["Clicks"] = "CLICKS";
    MediationReportSpecSortConditionMetricEnum["EstimatedEarnings"] = "ESTIMATED_EARNINGS";
    MediationReportSpecSortConditionMetricEnum["Impressions"] = "IMPRESSIONS";
    MediationReportSpecSortConditionMetricEnum["ImpressionCtr"] = "IMPRESSION_CTR";
    MediationReportSpecSortConditionMetricEnum["MatchedRequests"] = "MATCHED_REQUESTS";
    MediationReportSpecSortConditionMetricEnum["MatchRate"] = "MATCH_RATE";
    MediationReportSpecSortConditionMetricEnum["ObservedEcpm"] = "OBSERVED_ECPM";
})(MediationReportSpecSortConditionMetricEnum || (MediationReportSpecSortConditionMetricEnum = {}));
export var MediationReportSpecSortConditionOrderEnum;
(function (MediationReportSpecSortConditionOrderEnum) {
    MediationReportSpecSortConditionOrderEnum["SortOrderUnspecified"] = "SORT_ORDER_UNSPECIFIED";
    MediationReportSpecSortConditionOrderEnum["Ascending"] = "ASCENDING";
    MediationReportSpecSortConditionOrderEnum["Descending"] = "DESCENDING";
})(MediationReportSpecSortConditionOrderEnum || (MediationReportSpecSortConditionOrderEnum = {}));
// MediationReportSpecSortCondition
/**
 * Sorting direction to be applied on a dimension or a metric.
**/
var MediationReportSpecSortCondition = /** @class */ (function (_super) {
    __extends(MediationReportSpecSortCondition, _super);
    function MediationReportSpecSortCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", String)
    ], MediationReportSpecSortCondition.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", String)
    ], MediationReportSpecSortCondition.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], MediationReportSpecSortCondition.prototype, "order", void 0);
    return MediationReportSpecSortCondition;
}(SpeakeasyBase));
export { MediationReportSpecSortCondition };
