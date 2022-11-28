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
import { Metric } from "./metric";
import { FrequencyEnum } from "./frequencyenum";
import { MetricSource } from "./metricsource";
import { TimestampColumn } from "./timestampcolumn";
var DescribeMetricSetResponse = /** @class */ (function (_super) {
    __extends(DescribeMetricSetResponse, _super);
    function DescribeMetricSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], DescribeMetricSetResponse.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeMetricSetResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DimensionList" }),
        __metadata("design:type", Array)
    ], DescribeMetricSetResponse.prototype, "dimensionList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModificationTime" }),
        __metadata("design:type", Date)
    ], DescribeMetricSetResponse.prototype, "lastModificationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricList", elemType: Metric }),
        __metadata("design:type", Array)
    ], DescribeMetricSetResponse.prototype, "metricList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetArn" }),
        __metadata("design:type", String)
    ], DescribeMetricSetResponse.prototype, "metricSetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetDescription" }),
        __metadata("design:type", String)
    ], DescribeMetricSetResponse.prototype, "metricSetDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetFrequency" }),
        __metadata("design:type", String)
    ], DescribeMetricSetResponse.prototype, "metricSetFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSetName" }),
        __metadata("design:type", String)
    ], DescribeMetricSetResponse.prototype, "metricSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricSource" }),
        __metadata("design:type", MetricSource)
    ], DescribeMetricSetResponse.prototype, "metricSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Offset" }),
        __metadata("design:type", Number)
    ], DescribeMetricSetResponse.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimestampColumn" }),
        __metadata("design:type", TimestampColumn)
    ], DescribeMetricSetResponse.prototype, "timestampColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timezone" }),
        __metadata("design:type", String)
    ], DescribeMetricSetResponse.prototype, "timezone", void 0);
    return DescribeMetricSetResponse;
}(SpeakeasyBase));
export { DescribeMetricSetResponse };
