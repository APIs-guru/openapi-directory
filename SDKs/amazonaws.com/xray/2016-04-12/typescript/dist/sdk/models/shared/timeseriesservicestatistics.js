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
import { EdgeStatistics } from "./edgestatistics";
import { HistogramEntry } from "./histogramentry";
import { ForecastStatistics } from "./forecaststatistics";
import { ServiceStatistics } from "./servicestatistics";
// TimeSeriesServiceStatistics
/**
 * A list of TimeSeriesStatistic structures.
**/
var TimeSeriesServiceStatistics = /** @class */ (function (_super) {
    __extends(TimeSeriesServiceStatistics, _super);
    function TimeSeriesServiceStatistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EdgeSummaryStatistics" }),
        __metadata("design:type", EdgeStatistics)
    ], TimeSeriesServiceStatistics.prototype, "edgeSummaryStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseTimeHistogram", elemType: HistogramEntry }),
        __metadata("design:type", Array)
    ], TimeSeriesServiceStatistics.prototype, "responseTimeHistogram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceForecastStatistics" }),
        __metadata("design:type", ForecastStatistics)
    ], TimeSeriesServiceStatistics.prototype, "serviceForecastStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceSummaryStatistics" }),
        __metadata("design:type", ServiceStatistics)
    ], TimeSeriesServiceStatistics.prototype, "serviceSummaryStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Timestamp" }),
        __metadata("design:type", Date)
    ], TimeSeriesServiceStatistics.prototype, "timestamp", void 0);
    return TimeSeriesServiceStatistics;
}(SpeakeasyBase));
export { TimeSeriesServiceStatistics };
