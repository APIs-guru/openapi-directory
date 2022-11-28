import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegressionEvaluationMetrics
/** 
 * Metrics for regression problems.
**/
export class RegressionEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meanAbsoluteError" })
  meanAbsoluteError?: number;

  @SpeakeasyMetadata({ data: "json, name=meanAbsolutePercentageError" })
  meanAbsolutePercentageError?: number;

  @SpeakeasyMetadata({ data: "json, name=rSquared" })
  rSquared?: number;

  @SpeakeasyMetadata({ data: "json, name=rootMeanSquaredError" })
  rootMeanSquaredError?: number;

  @SpeakeasyMetadata({ data: "json, name=rootMeanSquaredLogError" })
  rootMeanSquaredLogError?: number;
}
