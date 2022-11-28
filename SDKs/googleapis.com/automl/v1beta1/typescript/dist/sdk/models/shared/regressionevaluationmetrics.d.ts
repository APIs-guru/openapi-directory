import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for regression problems.
**/
export declare class RegressionEvaluationMetrics extends SpeakeasyBase {
    meanAbsoluteError?: number;
    meanAbsolutePercentageError?: number;
    rSquared?: number;
    rootMeanSquaredError?: number;
    rootMeanSquaredLogError?: number;
}
