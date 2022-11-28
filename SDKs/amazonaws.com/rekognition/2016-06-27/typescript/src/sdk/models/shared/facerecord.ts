import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Face } from "./face";
import { FaceDetail } from "./facedetail";



// FaceRecord
/** 
 * Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
**/
export class FaceRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Face" })
  face?: Face;

  @SpeakeasyMetadata({ data: "json, name=FaceDetail" })
  faceDetail?: FaceDetail;
}
