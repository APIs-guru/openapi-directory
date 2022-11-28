import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { BinaryConfusionMatrix } from "./binaryconfusionmatrix";
/**
 * Evaluation metrics for binary classification/classifier models.
**/
export declare class BinaryClassificationMetrics extends SpeakeasyBase {
    aggregateClassificationMetrics?: AggregateClassificationMetrics;
    binaryConfusionMatrixList?: BinaryConfusionMatrix[];
    negativeLabel?: string;
    positiveLabel?: string;
}
