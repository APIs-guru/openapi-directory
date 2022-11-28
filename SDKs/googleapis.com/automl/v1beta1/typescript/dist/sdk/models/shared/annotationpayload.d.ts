import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationAnnotation } from "./classificationannotation";
import { ImageObjectDetectionAnnotation } from "./imageobjectdetectionannotation";
import { TablesAnnotation } from "./tablesannotation";
import { TextExtractionAnnotation } from "./textextractionannotation";
import { TextSentimentAnnotation } from "./textsentimentannotation";
import { TranslationAnnotation } from "./translationannotation";
import { VideoClassificationAnnotation } from "./videoclassificationannotation";
import { VideoObjectTrackingAnnotation } from "./videoobjecttrackingannotation";
/**
 * Contains annotation information that is relevant to AutoML.
**/
export declare class AnnotationPayload extends SpeakeasyBase {
    annotationSpecId?: string;
    classification?: ClassificationAnnotation;
    displayName?: string;
    imageObjectDetection?: ImageObjectDetectionAnnotation;
    tables?: TablesAnnotation;
    textExtraction?: TextExtractionAnnotation;
    textSentiment?: TextSentimentAnnotation;
    translation?: TranslationAnnotation;
    videoClassification?: VideoClassificationAnnotation;
    videoObjectTracking?: VideoObjectTrackingAnnotation;
}
