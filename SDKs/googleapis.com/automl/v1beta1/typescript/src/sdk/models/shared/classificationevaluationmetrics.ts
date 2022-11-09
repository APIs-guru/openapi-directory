import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationEvaluationMetricsConfidenceMetricsEntry } from "./classificationevaluationmetricsconfidencemetricsentry";
import { ConfusionMatrix } from "./confusionmatrix";


// ClassificationEvaluationMetrics
/** 
 * Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.
**/
export class ClassificationEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string[];

  @Metadata({ data: "json, name=auPrc" })
  auPrc?: number;

  @Metadata({ data: "json, name=auRoc" })
  auRoc?: number;

  @Metadata({ data: "json, name=baseAuPrc" })
  baseAuPrc?: number;

  @Metadata({ data: "json, name=confidenceMetricsEntry", elemType: shared.ClassificationEvaluationMetricsConfidenceMetricsEntry })
  confidenceMetricsEntry?: ClassificationEvaluationMetricsConfidenceMetricsEntry[];

  @Metadata({ data: "json, name=confusionMatrix" })
  confusionMatrix?: ConfusionMatrix;

  @Metadata({ data: "json, name=logLoss" })
  logLoss?: number;
}
