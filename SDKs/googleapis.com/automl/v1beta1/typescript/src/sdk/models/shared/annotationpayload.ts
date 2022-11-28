import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationAnnotation } from "./classificationannotation";
import { ImageObjectDetectionAnnotation } from "./imageobjectdetectionannotation";
import { TablesAnnotation } from "./tablesannotation";
import { TextExtractionAnnotation } from "./textextractionannotation";
import { TextSentimentAnnotation } from "./textsentimentannotation";
import { TranslationAnnotation } from "./translationannotation";
import { VideoClassificationAnnotation } from "./videoclassificationannotation";
import { VideoObjectTrackingAnnotation } from "./videoobjecttrackingannotation";



// AnnotationPayload
/** 
 * Contains annotation information that is relevant to AutoML.
**/
export class AnnotationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: ClassificationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=imageObjectDetection" })
  imageObjectDetection?: ImageObjectDetectionAnnotation;

  @SpeakeasyMetadata({ data: "json, name=tables" })
  tables?: TablesAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textExtraction" })
  textExtraction?: TextExtractionAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textSentiment" })
  textSentiment?: TextSentimentAnnotation;

  @SpeakeasyMetadata({ data: "json, name=translation" })
  translation?: TranslationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=videoClassification" })
  videoClassification?: VideoClassificationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=videoObjectTracking" })
  videoObjectTracking?: VideoObjectTrackingAnnotation;
}
