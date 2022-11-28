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
import { FilterExpression } from "./filterexpression";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
import { MinuteRange } from "./minuterange";
import { OrderBy } from "./orderby";
export var RunRealtimeReportRequestMetricAggregationsEnum;
(function (RunRealtimeReportRequestMetricAggregationsEnum) {
    RunRealtimeReportRequestMetricAggregationsEnum["MetricAggregationUnspecified"] = "METRIC_AGGREGATION_UNSPECIFIED";
    RunRealtimeReportRequestMetricAggregationsEnum["Total"] = "TOTAL";
    RunRealtimeReportRequestMetricAggregationsEnum["Minimum"] = "MINIMUM";
    RunRealtimeReportRequestMetricAggregationsEnum["Maximum"] = "MAXIMUM";
    RunRealtimeReportRequestMetricAggregationsEnum["Count"] = "COUNT";
})(RunRealtimeReportRequestMetricAggregationsEnum || (RunRealtimeReportRequestMetricAggregationsEnum = {}));
// RunRealtimeReportRequest
/**
 * The request to generate a realtime report.
**/
var RunRealtimeReportRequest = /** @class */ (function (_super) {
    __extends(RunRealtimeReportRequest, _super);
    function RunRealtimeReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilter" }),
        __metadata("design:type", FilterExpression)
    ], RunRealtimeReportRequest.prototype, "dimensionFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: Dimension }),
        __metadata("design:type", Array)
    ], RunRealtimeReportRequest.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", String)
    ], RunRealtimeReportRequest.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricAggregations" }),
        __metadata("design:type", Array)
    ], RunRealtimeReportRequest.prototype, "metricAggregations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricFilter" }),
        __metadata("design:type", FilterExpression)
    ], RunRealtimeReportRequest.prototype, "metricFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric }),
        __metadata("design:type", Array)
    ], RunRealtimeReportRequest.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minuteRanges", elemType: MinuteRange }),
        __metadata("design:type", Array)
    ], RunRealtimeReportRequest.prototype, "minuteRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBys", elemType: OrderBy }),
        __metadata("design:type", Array)
    ], RunRealtimeReportRequest.prototype, "orderBys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPropertyQuota" }),
        __metadata("design:type", Boolean)
    ], RunRealtimeReportRequest.prototype, "returnPropertyQuota", void 0);
    return RunRealtimeReportRequest;
}(SpeakeasyBase));
export { RunRealtimeReportRequest };
