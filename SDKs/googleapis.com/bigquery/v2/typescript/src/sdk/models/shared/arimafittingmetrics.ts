import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ArimaFittingMetrics
/** 
 * ARIMA model fitting metrics.
**/
export class ArimaFittingMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=aic" })
  aic?: number;

  @Metadata({ data: "json, name=logLikelihood" })
  logLikelihood?: number;

  @Metadata({ data: "json, name=variance" })
  variance?: number;
}
