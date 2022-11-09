import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { ConfusionMatrix } from "./confusionmatrix";


// MultiClassClassificationMetrics
/** 
 * Evaluation metrics for multi-class classification/classifier models.
**/
export class MultiClassClassificationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregateClassificationMetrics" })
  aggregateClassificationMetrics?: AggregateClassificationMetrics;

  @Metadata({ data: "json, name=confusionMatrixList", elemType: shared.ConfusionMatrix })
  confusionMatrixList?: ConfusionMatrix[];
}
