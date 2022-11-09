import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationAnnotation } from "./classificationannotation";
import { TimeSegment } from "./timesegment";


// VideoClassificationAnnotation
/** 
 * Contains annotation details specific to video classification.
**/
export class VideoClassificationAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationAnnotation" })
  classificationAnnotation?: ClassificationAnnotation;

  @Metadata({ data: "json, name=timeSegment" })
  timeSegment?: TimeSegment;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
