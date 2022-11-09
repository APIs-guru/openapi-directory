import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AggregateClassificationMetrics
/** 
 * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
**/
export class AggregateClassificationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=accuracy" })
  accuracy?: number;

  @Metadata({ data: "json, name=f1Score" })
  f1Score?: number;

  @Metadata({ data: "json, name=logLoss" })
  logLoss?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;

  @Metadata({ data: "json, name=rocAuc" })
  rocAuc?: number;

  @Metadata({ data: "json, name=threshold" })
  threshold?: number;
}
