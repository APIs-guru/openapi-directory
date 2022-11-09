import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RankingMetrics
/** 
 * Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
**/
export class RankingMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=averageRank" })
  averageRank?: number;

  @Metadata({ data: "json, name=meanAveragePrecision" })
  meanAveragePrecision?: number;

  @Metadata({ data: "json, name=meanSquaredError" })
  meanSquaredError?: number;

  @Metadata({ data: "json, name=normalizedDiscountedCumulativeGain" })
  normalizedDiscountedCumulativeGain?: number;
}
