import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceDetail } from "./facedetail";



// FaceDetection
/** 
 * Information about a face detected in a video analysis request and the time the face was detected in the video. 
**/
export class FaceDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Face" })
  face?: FaceDetail;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
