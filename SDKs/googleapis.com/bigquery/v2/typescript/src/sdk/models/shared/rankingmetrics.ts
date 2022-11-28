import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RankingMetrics
/** 
 * Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
**/
export class RankingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageRank" })
  averageRank?: number;

  @SpeakeasyMetadata({ data: "json, name=meanAveragePrecision" })
  meanAveragePrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=meanSquaredError" })
  meanSquaredError?: number;

  @SpeakeasyMetadata({ data: "json, name=normalizedDiscountedCumulativeGain" })
  normalizedDiscountedCumulativeGain?: number;
}
