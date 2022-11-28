import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationEvaluationMetricsConfidenceMetricsEntry
/** 
 * Metrics for a single confidence threshold.
**/
export class ClassificationEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=f1ScoreAt1" })
  f1ScoreAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=falseNegativeCount" })
  falseNegativeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=falsePositiveCount" })
  falsePositiveCount?: string;

  @SpeakeasyMetadata({ data: "json, name=falsePositiveRate" })
  falsePositiveRate?: number;

  @SpeakeasyMetadata({ data: "json, name=falsePositiveRateAt1" })
  falsePositiveRateAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=positionThreshold" })
  positionThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=precisionAt1" })
  precisionAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=recallAt1" })
  recallAt1?: number;

  @SpeakeasyMetadata({ data: "json, name=trueNegativeCount" })
  trueNegativeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=truePositiveCount" })
  truePositiveCount?: string;
}
