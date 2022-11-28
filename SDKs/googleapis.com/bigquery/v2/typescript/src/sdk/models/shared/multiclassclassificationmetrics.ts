import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { ConfusionMatrix } from "./confusionmatrix";



// MultiClassClassificationMetrics
/** 
 * Evaluation metrics for multi-class classification/classifier models.
**/
export class MultiClassClassificationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateClassificationMetrics" })
  aggregateClassificationMetrics?: AggregateClassificationMetrics;

  @SpeakeasyMetadata({ data: "json, name=confusionMatrixList", elemType: ConfusionMatrix })
  confusionMatrixList?: ConfusionMatrix[];
}
