import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetricsConfusionMatrixRow } from "./classificationevaluationmetricsconfusionmatrixrow";
/**
 * Confusion matrix of the model running the classification.
**/
export declare class ConfusionMatrix extends SpeakeasyBase {
    annotationSpecId?: string[];
    displayName?: string[];
    row?: ClassificationEvaluationMetricsConfusionMatrixRow[];
}
