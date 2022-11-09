import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextExtractionEvaluationMetricsConfidenceMetricsEntry } from "./textextractionevaluationmetricsconfidencemetricsentry";


// TextExtractionEvaluationMetrics
/** 
 * Model evaluation metrics for text extraction problems.
**/
export class TextExtractionEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=auPrc" })
  auPrc?: number;

  @Metadata({ data: "json, name=confidenceMetricsEntries", elemType: shared.TextExtractionEvaluationMetricsConfidenceMetricsEntry })
  confidenceMetricsEntries?: TextExtractionEvaluationMetricsConfidenceMetricsEntry[];
}
