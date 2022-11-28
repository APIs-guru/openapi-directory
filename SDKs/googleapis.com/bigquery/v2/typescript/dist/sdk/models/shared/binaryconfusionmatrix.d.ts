import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Confusion matrix for binary classification models.
**/
export declare class BinaryConfusionMatrix extends SpeakeasyBase {
    accuracy?: number;
    f1Score?: number;
    falseNegatives?: string;
    falsePositives?: string;
    positiveClassThreshold?: number;
    precision?: number;
    recall?: number;
    trueNegatives?: string;
    truePositives?: string;
}
