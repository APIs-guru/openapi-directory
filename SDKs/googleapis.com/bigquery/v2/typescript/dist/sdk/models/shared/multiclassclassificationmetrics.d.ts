import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { ConfusionMatrix } from "./confusionmatrix";
/**
 * Evaluation metrics for multi-class classification/classifier models.
**/
export declare class MultiClassClassificationMetrics extends SpeakeasyBase {
    aggregateClassificationMetrics?: AggregateClassificationMetrics;
    confusionMatrixList?: ConfusionMatrix[];
}
