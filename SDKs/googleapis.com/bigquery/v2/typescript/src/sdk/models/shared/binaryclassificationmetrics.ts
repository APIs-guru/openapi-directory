import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { BinaryConfusionMatrix } from "./binaryconfusionmatrix";


// BinaryClassificationMetrics
/** 
 * Evaluation metrics for binary classification/classifier models.
**/
export class BinaryClassificationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregateClassificationMetrics" })
  aggregateClassificationMetrics?: AggregateClassificationMetrics;

  @Metadata({ data: "json, name=binaryConfusionMatrixList", elemType: shared.BinaryConfusionMatrix })
  binaryConfusionMatrixList?: BinaryConfusionMatrix[];

  @Metadata({ data: "json, name=negativeLabel" })
  negativeLabel?: string;

  @Metadata({ data: "json, name=positiveLabel" })
  positiveLabel?: string;
}
