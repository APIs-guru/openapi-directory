import { SpeakeasyBase } from "../../../internal/utils";
import { TextExtractionEvaluationMetricsConfidenceMetricsEntry } from "./textextractionevaluationmetricsconfidencemetricsentry";
/**
 * Model evaluation metrics for text extraction problems.
**/
export declare class TextExtractionEvaluationMetrics extends SpeakeasyBase {
    auPrc?: number;
    confidenceMetricsEntries?: TextExtractionEvaluationMetricsConfidenceMetricsEntry[];
}
