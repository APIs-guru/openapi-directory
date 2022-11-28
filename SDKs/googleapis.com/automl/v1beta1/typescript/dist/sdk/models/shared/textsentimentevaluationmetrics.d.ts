import { SpeakeasyBase } from "../../../internal/utils";
import { ConfusionMatrix } from "./confusionmatrix";
/**
 * Model evaluation metrics for text sentiment problems.
**/
export declare class TextSentimentEvaluationMetrics extends SpeakeasyBase {
    annotationSpecId?: string[];
    confusionMatrix?: ConfusionMatrix;
    f1Score?: number;
    linearKappa?: number;
    meanAbsoluteError?: number;
    meanSquaredError?: number;
    precision?: number;
    quadraticKappa?: number;
    recall?: number;
}
