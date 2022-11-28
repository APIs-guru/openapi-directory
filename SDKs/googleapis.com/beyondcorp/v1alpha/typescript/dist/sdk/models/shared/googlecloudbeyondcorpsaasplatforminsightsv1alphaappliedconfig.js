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
import { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping } from "./googlecloudbeyondcorpsaasplatforminsightsv1alphacustomgrouping";
export var GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum;
(function (GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum) {
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum["AggregationUnspecified"] = "AGGREGATION_UNSPECIFIED";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum["Hourly"] = "HOURLY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum["Daily"] = "DAILY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum["Weekly"] = "WEEKLY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum["Monthly"] = "MONTHLY";
    GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum["CustomDateRange"] = "CUSTOM_DATE_RANGE";
})(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum || (GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfigAggregationEnum = {}));
// GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig
/**
 * The configuration that was applied to generate the result.
**/
var GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig, _super);
    function GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregation" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.prototype, "aggregation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customGrouping" }),
        __metadata("design:type", GoogleCloudBeyondcorpSaasplatformInsightsV1alphaCustomGrouping)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.prototype, "customGrouping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldFilter" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.prototype, "fieldFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.prototype, "startTime", void 0);
    return GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig;
}(SpeakeasyBase));
export { GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig };
