import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaSingleModelForecastingMetrics } from "./arimasinglemodelforecastingmetrics";
import { ArimaOrder } from "./arimaorder";
export declare enum ArimaForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED",
    NoSeasonality = "NO_SEASONALITY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Model evaluation metrics for ARIMA forecasting models.
**/
export declare class ArimaForecastingMetrics extends SpeakeasyBase {
    arimaFittingMetrics?: ArimaFittingMetrics[];
    arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[];
    hasDrift?: boolean[];
    nonSeasonalOrder?: ArimaOrder[];
    seasonalPeriods?: ArimaForecastingMetricsSeasonalPeriodsEnum[];
    timeSeriesId?: string[];
}
