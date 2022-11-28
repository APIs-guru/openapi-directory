import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationAnnotation } from "./classificationannotation";
import { TimeSegment } from "./timesegment";
/**
 * Contains annotation details specific to video classification.
**/
export declare class VideoClassificationAnnotation extends SpeakeasyBase {
    classificationAnnotation?: ClassificationAnnotation;
    timeSegment?: TimeSegment;
    type?: string;
}
