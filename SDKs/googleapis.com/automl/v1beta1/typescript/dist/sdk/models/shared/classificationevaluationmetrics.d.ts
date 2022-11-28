import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetricsConfidenceMetricsEntry } from "./classificationevaluationmetricsconfidencemetricsentry";
import { ConfusionMatrix } from "./confusionmatrix";
/**
 * Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.
**/
export declare class ClassificationEvaluationMetrics extends SpeakeasyBase {
    annotationSpecId?: string[];
    auPrc?: number;
    auRoc?: number;
    baseAuPrc?: number;
    confidenceMetricsEntry?: ClassificationEvaluationMetricsConfidenceMetricsEntry[];
    confusionMatrix?: ConfusionMatrix;
    logLoss?: number;
}
