import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaOrder } from "./arimaorder";
export declare enum ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED",
    NoSeasonality = "NO_SEASONALITY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Model evaluation metrics for a single ARIMA forecasting model.
**/
export declare class ArimaSingleModelForecastingMetrics extends SpeakeasyBase {
    arimaFittingMetrics?: ArimaFittingMetrics;
    hasDrift?: boolean;
    hasHolidayEffect?: boolean;
    hasSpikesAndDips?: boolean;
    hasStepChanges?: boolean;
    nonSeasonalOrder?: ArimaOrder;
    seasonalPeriods?: ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[];
    timeSeriesId?: string;
    timeSeriesIds?: string[];
}
