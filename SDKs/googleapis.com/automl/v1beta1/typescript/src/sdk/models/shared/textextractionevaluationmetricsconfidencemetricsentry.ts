import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextExtractionEvaluationMetricsConfidenceMetricsEntry
/** 
 * Metrics for a single confidence threshold.
**/
export class TextExtractionEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;
}
