import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FaceDetail } from "./facedetail";


// FaceDetection
/** 
 * Information about a face detected in a video analysis request and the time the face was detected in the video. 
**/
export class FaceDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Face" })
  face?: FaceDetail;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
