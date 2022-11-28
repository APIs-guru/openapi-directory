import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetricsConfusionMatrixRow } from "./classificationevaluationmetricsconfusionmatrixrow";



// ConfusionMatrix
/** 
 * Confusion matrix of the model running the classification.
**/
export class ConfusionMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string[];

  @SpeakeasyMetadata({ data: "json, name=row", elemType: ClassificationEvaluationMetricsConfusionMatrixRow })
  row?: ClassificationEvaluationMetricsConfusionMatrixRow[];
}
