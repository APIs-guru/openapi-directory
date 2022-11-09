import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaOrder } from "./arimaorder";

export enum ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
,    NoSeasonality = "NO_SEASONALITY"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
,    Quarterly = "QUARTERLY"
,    Yearly = "YEARLY"
}


// ArimaSingleModelForecastingMetrics
/** 
 * Model evaluation metrics for a single ARIMA forecasting model.
**/
export class ArimaSingleModelForecastingMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=arimaFittingMetrics" })
  arimaFittingMetrics?: ArimaFittingMetrics;

  @Metadata({ data: "json, name=hasDrift" })
  hasDrift?: boolean;

  @Metadata({ data: "json, name=hasHolidayEffect" })
  hasHolidayEffect?: boolean;

  @Metadata({ data: "json, name=hasSpikesAndDips" })
  hasSpikesAndDips?: boolean;

  @Metadata({ data: "json, name=hasStepChanges" })
  hasStepChanges?: boolean;

  @Metadata({ data: "json, name=nonSeasonalOrder" })
  nonSeasonalOrder?: ArimaOrder;

  @Metadata({ data: "json, name=seasonalPeriods" })
  seasonalPeriods?: ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[];

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;

  @Metadata({ data: "json, name=timeSeriesIds" })
  timeSeriesIds?: string[];
}
