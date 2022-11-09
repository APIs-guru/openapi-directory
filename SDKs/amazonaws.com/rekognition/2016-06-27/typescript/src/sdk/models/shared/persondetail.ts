import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";
import { FaceDetail } from "./facedetail";


// PersonDetail
/** 
 * Details about a person detected in a video analysis request.
**/
export class PersonDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Face" })
  face?: FaceDetail;

  @Metadata({ data: "json, name=Index" })
  index?: number;
}
