import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=annotationSpecId" })
  annotationSpecId?: string;

  @Metadata({ data: "json, name=classification" })
  classification?: ClassificationAnnotation;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=imageObjectDetection" })
  imageObjectDetection?: ImageObjectDetectionAnnotation;

  @Metadata({ data: "json, name=tables" })
  tables?: TablesAnnotation;

  @Metadata({ data: "json, name=textExtraction" })
  textExtraction?: TextExtractionAnnotation;

  @Metadata({ data: "json, name=textSentiment" })
  textSentiment?: TextSentimentAnnotation;

  @Metadata({ data: "json, name=translation" })
  translation?: TranslationAnnotation;

  @Metadata({ data: "json, name=videoClassification" })
  videoClassification?: VideoClassificationAnnotation;

  @Metadata({ data: "json, name=videoObjectTracking" })
  videoObjectTracking?: VideoObjectTrackingAnnotation;
}
