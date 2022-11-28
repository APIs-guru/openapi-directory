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
import { ArimaSingleModelForecastingMetrics } from "./arimasinglemodelforecastingmetrics";
import { ArimaOrder } from "./arimaorder";
export var ArimaForecastingMetricsSeasonalPeriodsEnum;
(function (ArimaForecastingMetricsSeasonalPeriodsEnum) {
    ArimaForecastingMetricsSeasonalPeriodsEnum["SeasonalPeriodTypeUnspecified"] = "SEASONAL_PERIOD_TYPE_UNSPECIFIED";
    ArimaForecastingMetricsSeasonalPeriodsEnum["NoSeasonality"] = "NO_SEASONALITY";
    ArimaForecastingMetricsSeasonalPeriodsEnum["Daily"] = "DAILY";
    ArimaForecastingMetricsSeasonalPeriodsEnum["Weekly"] = "WEEKLY";
    ArimaForecastingMetricsSeasonalPeriodsEnum["Monthly"] = "MONTHLY";
    ArimaForecastingMetricsSeasonalPeriodsEnum["Quarterly"] = "QUARTERLY";
    ArimaForecastingMetricsSeasonalPeriodsEnum["Yearly"] = "YEARLY";
})(ArimaForecastingMetricsSeasonalPeriodsEnum || (ArimaForecastingMetricsSeasonalPeriodsEnum = {}));
// ArimaForecastingMetrics
/**
 * Model evaluation metrics for ARIMA forecasting models.
**/
var ArimaForecastingMetrics = /** @class */ (function (_super) {
    __extends(ArimaForecastingMetrics, _super);
    function ArimaForecastingMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arimaFittingMetrics", elemType: ArimaFittingMetrics }),
        __metadata("design:type", Array)
    ], ArimaForecastingMetrics.prototype, "arimaFittingMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arimaSingleModelForecastingMetrics", elemType: ArimaSingleModelForecastingMetrics }),
        __metadata("design:type", Array)
    ], ArimaForecastingMetrics.prototype, "arimaSingleModelForecastingMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasDrift" }),
        __metadata("design:type", Array)
    ], ArimaForecastingMetrics.prototype, "hasDrift", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSeasonalOrder", elemType: ArimaOrder }),
        __metadata("design:type", Array)
    ], ArimaForecastingMetrics.prototype, "nonSeasonalOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasonalPeriods" }),
        __metadata("design:type", Array)
    ], ArimaForecastingMetrics.prototype, "seasonalPeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesId" }),
        __metadata("design:type", Array)
    ], ArimaForecastingMetrics.prototype, "timeSeriesId", void 0);
    return ArimaForecastingMetrics;
}(SpeakeasyBase));
export { ArimaForecastingMetrics };
