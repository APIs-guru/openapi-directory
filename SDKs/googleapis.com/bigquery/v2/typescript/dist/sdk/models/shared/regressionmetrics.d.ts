import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics for regression and explicit feedback type matrix factorization models.
**/
export declare class RegressionMetrics extends SpeakeasyBase {
    meanAbsoluteError?: number;
    meanSquaredError?: number;
    meanSquaredLogError?: number;
    medianAbsoluteError?: number;
    rSquared?: number;
}
