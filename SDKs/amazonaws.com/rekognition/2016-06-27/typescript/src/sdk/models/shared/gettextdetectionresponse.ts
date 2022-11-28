import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { TextDetectionResult } from "./textdetectionresult";
import { VideoMetadata } from "./videometadata";



export class GetTextDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=TextDetections", elemType: TextDetectionResult })
  textDetections?: TextDetectionResult[];

  @SpeakeasyMetadata({ data: "json, name=TextModelVersion" })
  textModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
