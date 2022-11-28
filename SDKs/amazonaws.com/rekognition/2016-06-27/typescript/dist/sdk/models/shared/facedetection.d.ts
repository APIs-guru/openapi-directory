import { SpeakeasyBase } from "../../../internal/utils";
import { FaceDetail } from "./facedetail";
/**
 * Information about a face detected in a video analysis request and the time the face was detected in the video.
**/
export declare class FaceDetection extends SpeakeasyBase {
    face?: FaceDetail;
    timestamp?: number;
}
