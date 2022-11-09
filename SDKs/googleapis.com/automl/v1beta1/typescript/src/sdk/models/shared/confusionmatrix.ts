import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationEvaluationMetricsConfusionMatrixRow } from "./classificationevaluationmetricsconfusionmatrixrow";


// ConfusionMatrix
/** 
 * Confusion matrix of the model running the classification.
**/
export class ConfusionMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string[];

  @Metadata({ data: "json, name=row", elemType: shared.ClassificationEvaluationMetricsConfusionMatrixRow })
  row?: ClassificationEvaluationMetricsConfusionMatrixRow[];
}
