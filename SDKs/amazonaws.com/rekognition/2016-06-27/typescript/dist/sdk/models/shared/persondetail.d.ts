import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { FaceDetail } from "./facedetail";
/**
 * Details about a person detected in a video analysis request.
**/
export declare class PersonDetail extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    face?: FaceDetail;
    index?: number;
}
