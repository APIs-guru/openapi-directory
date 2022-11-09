import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaSingleModelForecastingMetrics } from "./arimasinglemodelforecastingmetrics";
import { ArimaOrder } from "./arimaorder";

export enum ArimaForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED"
,    NoSeasonality = "NO_SEASONALITY"
,    Daily = "DAILY"
,    Weekly = "WEEKLY"
,    Monthly = "MONTHLY"
,    Quarterly = "QUARTERLY"
,    Yearly = "YEARLY"
}


// ArimaForecastingMetrics
/** 
 * Model evaluation metrics for ARIMA forecasting models.
**/
export class ArimaForecastingMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=arimaFittingMetrics", elemType: shared.ArimaFittingMetrics })
  arimaFittingMetrics?: ArimaFittingMetrics[];

  @Metadata({ data: "json, name=arimaSingleModelForecastingMetrics", elemType: shared.ArimaSingleModelForecastingMetrics })
  arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[];

  @Metadata({ data: "json, name=hasDrift" })
  hasDrift?: boolean[];

  @Metadata({ data: "json, name=nonSeasonalOrder", elemType: shared.ArimaOrder })
  nonSeasonalOrder?: ArimaOrder[];

  @Metadata({ data: "json, name=seasonalPeriods" })
  seasonalPeriods?: ArimaForecastingMetricsSeasonalPeriodsEnum[];

  @Metadata({ data: "json, name=timeSeriesId" })
  timeSeriesId?: string[];
}
