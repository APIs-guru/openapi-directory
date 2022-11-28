import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
**/
export declare class AggregateClassificationMetrics extends SpeakeasyBase {
    accuracy?: number;
    f1Score?: number;
    logLoss?: number;
    precision?: number;
    recall?: number;
    rocAuc?: number;
    threshold?: number;
}
