import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ArimaFittingMetrics
/** 
 * ARIMA model fitting metrics.
**/
export class ArimaFittingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aic" })
  aic?: number;

  @SpeakeasyMetadata({ data: "json, name=logLikelihood" })
  logLikelihood?: number;

  @SpeakeasyMetadata({ data: "json, name=variance" })
  variance?: number;
}
