import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaSingleModelForecastingMetrics } from "./arimasinglemodelforecastingmetrics";
import { ArimaOrder } from "./arimaorder";


export enum ArimaForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED",
    NoSeasonality = "NO_SEASONALITY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}


// ArimaForecastingMetrics
/** 
 * Model evaluation metrics for ARIMA forecasting models.
**/
export class ArimaForecastingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arimaFittingMetrics", elemType: ArimaFittingMetrics })
  arimaFittingMetrics?: ArimaFittingMetrics[];

  @SpeakeasyMetadata({ data: "json, name=arimaSingleModelForecastingMetrics", elemType: ArimaSingleModelForecastingMetrics })
  arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[];

  @SpeakeasyMetadata({ data: "json, name=hasDrift" })
  hasDrift?: boolean[];

  @SpeakeasyMetadata({ data: "json, name=nonSeasonalOrder", elemType: ArimaOrder })
  nonSeasonalOrder?: ArimaOrder[];

  @SpeakeasyMetadata({ data: "json, name=seasonalPeriods" })
  seasonalPeriods?: ArimaForecastingMetricsSeasonalPeriodsEnum[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string[];
}
