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
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphainsightmetadatafield";
export var GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum;
(function (GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum) {
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum["AggregationUnspecified"] = "AGGREGATION_UNSPECIFIED";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum["Hourly"] = "HOURLY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum["Daily"] = "DAILY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum["Weekly"] = "WEEKLY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum["Monthly"] = "MONTHLY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum["CustomDateRange"] = "CUSTOM_DATE_RANGE";
})(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum || (GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataAggregationsEnum = {}));
// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata
/**
 * Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.
**/
var GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata, _super);
    function GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregations" }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "aggregations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subCategory" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "subCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.prototype, "type", void 0);
    return GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata };
