import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationAnnotation } from "./classificationannotation";
import { TimeSegment } from "./timesegment";



// VideoClassificationAnnotation
/** 
 * Contains annotation details specific to video classification.
**/
export class VideoClassificationAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationAnnotation" })
  classificationAnnotation?: ClassificationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=timeSegment" })
  timeSegment?: TimeSegment;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
