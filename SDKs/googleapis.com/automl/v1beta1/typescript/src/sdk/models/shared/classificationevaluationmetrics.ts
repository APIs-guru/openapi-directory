import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetricsConfidenceMetricsEntry } from "./classificationevaluationmetricsconfidencemetricsentry";
import { ConfusionMatrix } from "./confusionmatrix";



// ClassificationEvaluationMetrics
/** 
 * Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.
**/
export class ClassificationEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string[];

  @SpeakeasyMetadata({ data: "json, name=auPrc" })
  auPrc?: number;

  @SpeakeasyMetadata({ data: "json, name=auRoc" })
  auRoc?: number;

  @SpeakeasyMetadata({ data: "json, name=baseAuPrc" })
  baseAuPrc?: number;

  @SpeakeasyMetadata({ data: "json, name=confidenceMetricsEntry", elemType: ClassificationEvaluationMetricsConfidenceMetricsEntry })
  confidenceMetricsEntry?: ClassificationEvaluationMetricsConfidenceMetricsEntry[];

  @SpeakeasyMetadata({ data: "json, name=confusionMatrix" })
  confusionMatrix?: ConfusionMatrix;

  @SpeakeasyMetadata({ data: "json, name=logLoss" })
  logLoss?: number;
}
