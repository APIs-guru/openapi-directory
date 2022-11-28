import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetrics } from "./classificationevaluationmetrics";
import { ImageObjectDetectionEvaluationMetrics } from "./imageobjectdetectionevaluationmetrics";
import { RegressionEvaluationMetrics } from "./regressionevaluationmetrics";
import { TextExtractionEvaluationMetrics } from "./textextractionevaluationmetrics";
import { TextSentimentEvaluationMetrics } from "./textsentimentevaluationmetrics";
import { TranslationEvaluationMetrics } from "./translationevaluationmetrics";
import { VideoObjectTrackingEvaluationMetrics } from "./videoobjecttrackingevaluationmetrics";
/**
 * Evaluation results of a model.
**/
export declare class ModelEvaluation extends SpeakeasyBase {
    annotationSpecId?: string;
    classificationEvaluationMetrics?: ClassificationEvaluationMetrics;
    createTime?: string;
    displayName?: string;
    evaluatedExampleCount?: number;
    imageObjectDetectionEvaluationMetrics?: ImageObjectDetectionEvaluationMetrics;
    name?: string;
    regressionEvaluationMetrics?: RegressionEvaluationMetrics;
    textExtractionEvaluationMetrics?: TextExtractionEvaluationMetrics;
    textSentimentEvaluationMetrics?: TextSentimentEvaluationMetrics;
    translationEvaluationMetrics?: TranslationEvaluationMetrics;
    videoObjectTrackingEvaluationMetrics?: VideoObjectTrackingEvaluationMetrics;
}
