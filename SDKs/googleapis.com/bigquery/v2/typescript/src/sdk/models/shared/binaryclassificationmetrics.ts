import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { BinaryConfusionMatrix } from "./binaryconfusionmatrix";



// BinaryClassificationMetrics
/** 
 * Evaluation metrics for binary classification/classifier models.
**/
export class BinaryClassificationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateClassificationMetrics" })
  aggregateClassificationMetrics?: AggregateClassificationMetrics;

  @SpeakeasyMetadata({ data: "json, name=binaryConfusionMatrixList", elemType: BinaryConfusionMatrix })
  binaryConfusionMatrixList?: BinaryConfusionMatrix[];

  @SpeakeasyMetadata({ data: "json, name=negativeLabel" })
  negativeLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=positiveLabel" })
  positiveLabel?: string;
}
