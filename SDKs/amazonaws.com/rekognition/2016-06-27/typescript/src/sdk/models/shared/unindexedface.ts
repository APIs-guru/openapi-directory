import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceDetail } from "./facedetail";
import { ReasonEnum } from "./reasonenum";



// UnindexedFace
/** 
 * A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.
**/
export class UnindexedFace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceDetail" })
  faceDetail?: FaceDetail;

  @SpeakeasyMetadata({ data: "json, name=Reasons" })
  reasons?: ReasonEnum[];
}
