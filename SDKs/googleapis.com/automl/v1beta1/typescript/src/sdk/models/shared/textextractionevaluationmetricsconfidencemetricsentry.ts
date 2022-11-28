import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextExtractionEvaluationMetricsConfidenceMetricsEntry
/** 
 * Metrics for a single confidence threshold.
**/
export class TextExtractionEvaluationMetricsConfidenceMetricsEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceThreshold" })
  confidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;
}
