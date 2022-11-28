import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AggregateClassificationMetrics
/** 
 * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
**/
export class AggregateClassificationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @SpeakeasyMetadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @SpeakeasyMetadata({ data: "json, name=logLoss" })
  logLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=rocAuc" })
  rocAuc?: number;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: number;
}
