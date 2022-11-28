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
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaOrder } from "./arimaorder";
export var ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum;
(function (ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum) {
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["SeasonalPeriodTypeUnspecified"] = "SEASONAL_PERIOD_TYPE_UNSPECIFIED";
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["NoSeasonality"] = "NO_SEASONALITY";
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["Daily"] = "DAILY";
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["Weekly"] = "WEEKLY";
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["Monthly"] = "MONTHLY";
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["Quarterly"] = "QUARTERLY";
    ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum["Yearly"] = "YEARLY";
})(ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum || (ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum = {}));
// ArimaSingleModelForecastingMetrics
/**
 * Model evaluation metrics for a single ARIMA forecasting model.
**/
var ArimaSingleModelForecastingMetrics = /** @class */ (function (_super) {
    __extends(ArimaSingleModelForecastingMetrics, _super);
    function ArimaSingleModelForecastingMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arimaFittingMetrics" }),
        __metadata("design:type", ArimaFittingMetrics)
    ], ArimaSingleModelForecastingMetrics.prototype, "arimaFittingMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasDrift" }),
        __metadata("design:type", Boolean)
    ], ArimaSingleModelForecastingMetrics.prototype, "hasDrift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasHolidayEffect" }),
        __metadata("design:type", Boolean)
    ], ArimaSingleModelForecastingMetrics.prototype, "hasHolidayEffect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasSpikesAndDips" }),
        __metadata("design:type", Boolean)
    ], ArimaSingleModelForecastingMetrics.prototype, "hasSpikesAndDips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasStepChanges" }),
        __metadata("design:type", Boolean)
    ], ArimaSingleModelForecastingMetrics.prototype, "hasStepChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSeasonalOrder" }),
        __metadata("design:type", ArimaOrder)
    ], ArimaSingleModelForecastingMetrics.prototype, "nonSeasonalOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonalPeriods" }),
        __metadata("design:type", Array)
    ], ArimaSingleModelForecastingMetrics.prototype, "seasonalPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesId" }),
        __metadata("design:type", String)
    ], ArimaSingleModelForecastingMetrics.prototype, "timeSeriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesIds" }),
        __metadata("design:type", Array)
    ], ArimaSingleModelForecastingMetrics.prototype, "timeSeriesIds", void 0);
    return ArimaSingleModelForecastingMetrics;
}(SpeakeasyBase));
export { ArimaSingleModelForecastingMetrics };
