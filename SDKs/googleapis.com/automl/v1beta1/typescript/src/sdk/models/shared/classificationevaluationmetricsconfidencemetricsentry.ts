import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassificationEvaluationMetricsConfidenceMetricsEntry
/** 
 * Metrics for a single confidence threshold.
**/
export class ClassificationEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=f1ScoreAt1" })
  f1ScoreAt1?: number;

  @Metadata({ data: "json, name=falseNegativeCount" })
  falseNegativeCount?: string;

  @Metadata({ data: "json, name=falsePositiveCount" })
  falsePositiveCount?: string;

  @Metadata({ data: "json, name=falsePositiveRate" })
  falsePositiveRate?: number;

  @Metadata({ data: "json, name=falsePositiveRateAt1" })
  falsePositiveRateAt1?: number;

  @Metadata({ data: "json, name=positionThreshold" })
  positionThreshold?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=precisionAt1" })
  precisionAt1?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;

  @Metadata({ data: "json, name=recallAt1" })
  recallAt1?: number;

  @Metadata({ data: "json, name=trueNegativeCount" })
  trueNegativeCount?: string;

  @Metadata({ data: "json, name=truePositiveCount" })
  truePositiveCount?: string;
}
