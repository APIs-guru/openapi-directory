import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaOrder } from "./arimaorder";


export enum ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED",
    NoSeasonality = "NO_SEASONALITY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}


// ArimaSingleModelForecastingMetrics
/** 
 * Model evaluation metrics for a single ARIMA forecasting model.
**/
export class ArimaSingleModelForecastingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arimaFittingMetrics" })
  arimaFittingMetrics?: ArimaFittingMetrics;

  @SpeakeasyMetadata({ data: "json, name=hasDrift" })
  hasDrift?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasHolidayEffect" })
  hasHolidayEffect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasSpikesAndDips" })
  hasSpikesAndDips?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasStepChanges" })
  hasStepChanges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nonSeasonalOrder" })
  nonSeasonalOrder?: ArimaOrder;

  @SpeakeasyMetadata({ data: "json, name=seasonalPeriods" })
  seasonalPeriods?: ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeriesIds" })
  timeSeriesIds?: string[];
}
