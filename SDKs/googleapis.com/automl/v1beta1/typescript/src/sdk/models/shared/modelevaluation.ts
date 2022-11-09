import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string;

  @Metadata({ data: "json, name=classificationEvaluationMetrics" })
  classificationEvaluationMetrics?: ClassificationEvaluationMetrics;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=evaluatedExampleCount" })
  evaluatedExampleCount?: number;

  @Metadata({ data: "json, name=imageObjectDetectionEvaluationMetrics" })
  imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=regressionEvaluationMetrics" })
  regressionEvaluationMetrics?: RegressionEvaluationMetrics;

  @Metadata({ data: "json, name=textExtractionEvaluationMetrics" })
  textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics;

  @Metadata({ data: "json, name=textSentimentEvaluationMetrics" })
  textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics;

  @Metadata({ data: "json, name=translationEvaluationMetrics" })
  translationEvaluationMetrics?: TranslationEvaluationMetrics;

  @Metadata({ data: "json, name=videoObjectTrackingEvaluationMetrics" })
  videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics;
}
