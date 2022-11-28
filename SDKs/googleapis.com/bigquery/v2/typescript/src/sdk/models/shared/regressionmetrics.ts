import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegressionMetrics
/** 
 * Evaluation metrics for regression and explicit feedback type matrix factorization models.
**/
export class RegressionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meanAbsoluteError" })
  meanAbsoluteError?: number;

  @SpeakeasyMetadata({ data: "json, name=meanSquaredError" })
  meanSquaredError?: number;

  @SpeakeasyMetadata({ data: "json, name=meanSquaredLogError" })
  meanSquaredLogError?: number;

  @SpeakeasyMetadata({ data: "json, name=medianAbsoluteError" })
  medianAbsoluteError?: number;

  @SpeakeasyMetadata({ data: "json, name=rSquared" })
  rSquared?: number;
}
