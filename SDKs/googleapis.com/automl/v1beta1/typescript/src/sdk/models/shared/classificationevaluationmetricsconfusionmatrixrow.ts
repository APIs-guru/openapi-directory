import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationEvaluationMetricsConfusionMatrixRow
/** 
 * Output only. A row in the confusion matrix.
**/
export class ClassificationEvaluationMetricsConfusionMatrixRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exampleCount" })
  exampleCount?: number[];
}
