import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextExtractionEvaluationMetricsConfidenceMetricsEntry } from "./textextractionevaluationmetricsconfidencemetricsentry";



// TextExtractionEvaluationMetrics
/** 
 * Model evaluation metrics for text extraction problems.
**/
export class TextExtractionEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auPrc" })
  auPrc?: number;

  @SpeakeasyMetadata({ data: "json, name=confidenceMetricsEntries", elemType: TextExtractionEvaluationMetricsConfidenceMetricsEntry })
  confidenceMetricsEntries?: TextExtractionEvaluationMetricsConfidenceMetricsEntry[];
}
