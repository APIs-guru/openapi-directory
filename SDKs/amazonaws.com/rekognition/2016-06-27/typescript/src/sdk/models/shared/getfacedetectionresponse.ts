import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaceDetection } from "./facedetection";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";


export class GetFaceDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Faces", elemType: shared.FaceDetection })
  faces?: FaceDetection[];

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
