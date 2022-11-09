import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegressionMetrics
/** 
 * Evaluation metrics for regression and explicit feedback type matrix factorization models.
**/
export class RegressionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=meanAbsoluteError" })
  meanAbsoluteError?: number;

  @Metadata({ data: "json, name=meanSquaredError" })
  meanSquaredError?: number;

  @Metadata({ data: "json, name=meanSquaredLogError" })
  meanSquaredLogError?: number;

  @Metadata({ data: "json, name=medianAbsoluteError" })
  medianAbsoluteError?: number;

  @Metadata({ data: "json, name=rSquared" })
  rSquared?: number;
}
