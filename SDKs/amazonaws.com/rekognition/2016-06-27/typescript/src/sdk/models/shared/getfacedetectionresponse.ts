import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceDetection } from "./facedetection";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";



export class GetFaceDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Faces", elemType: FaceDetection })
  faces?: FaceDetection[];

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
