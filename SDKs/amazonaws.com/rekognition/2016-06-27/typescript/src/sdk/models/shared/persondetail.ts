import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { FaceDetail } from "./facedetail";



// PersonDetail
/** 
 * Details about a person detected in a video analysis request.
**/
export class PersonDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Face" })
  face?: FaceDetail;

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;
}
