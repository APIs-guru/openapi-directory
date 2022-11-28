import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetrics } from "./classificationevaluationmetrics";
import { ImageObjectDetectionEvaluationMetrics } from "./imageobjectdetectionevaluationmetrics";
import { RegressionEvaluationMetrics } from "./regressionevaluationmetrics";
import { TextExtractionEvaluationMetrics } from "./textextractionevaluationmetrics";
import { TextSentimentEvaluationMetrics } from "./textsentimentevaluationmetrics";
import { TranslationEvaluationMetrics } from "./translationevaluationmetrics";
import { VideoObjectTrackingEvaluationMetrics } from "./videoobjecttrackingevaluationmetrics";



// ModelEvaluation
/** 
 * Evaluation results of a model.
**/
export class ModelEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=classificationEvaluationMetrics" })
  classificationEvaluationMetrics?: ClassificationEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluatedExampleCount" })
  evaluatedExampleCount?: number;

  @SpeakeasyMetadata({ data: "json, name=imageObjectDetectionEvaluationMetrics" })
  imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=regressionEvaluationMetrics" })
  regressionEvaluationMetrics?: RegressionEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=textExtractionEvaluationMetrics" })
  textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=textSentimentEvaluationMetrics" })
  textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=translationEvaluationMetrics" })
  translationEvaluationMetrics?: TranslationEvaluationMetrics;

  @SpeakeasyMetadata({ data: "json, name=videoObjectTrackingEvaluationMetrics" })
  videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics;
}
