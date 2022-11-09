import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassificationEvaluationMetricsConfusionMatrixRow
/** 
 * Output only. A row in the confusion matrix.
**/
export class ClassificationEvaluationMetricsConfusionMatrixRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=exampleCount" })
  exampleCount?: number[];
}
