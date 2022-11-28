import { SpeakeasyBase } from "../../../internal/utils";
import { FaceDetection } from "./facedetection";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
export declare class GetFaceDetectionResponse extends SpeakeasyBase {
    faces?: FaceDetection[];
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
