import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegressionEvaluationMetrics
/** 
 * Metrics for regression problems.
**/
export class RegressionEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=meanAbsoluteError" })
  meanAbsoluteError?: number;

  @Metadata({ data: "json, name=meanAbsolutePercentageError" })
  meanAbsolutePercentageError?: number;

  @Metadata({ data: "json, name=rSquared" })
  rSquared?: number;

  @Metadata({ data: "json, name=rootMeanSquaredError" })
  rootMeanSquaredError?: number;

  @Metadata({ data: "json, name=rootMeanSquaredLogError" })
  rootMeanSquaredLogError?: number;
}
