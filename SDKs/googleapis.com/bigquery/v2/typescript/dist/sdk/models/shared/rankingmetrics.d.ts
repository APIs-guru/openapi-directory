import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
**/
export declare class RankingMetrics extends SpeakeasyBase {
    averageRank?: number;
    meanAveragePrecision?: number;
    meanSquaredError?: number;
    normalizedDiscountedCumulativeGain?: number;
}
