import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { TextDetectionResult } from "./textdetectionresult";
import { VideoMetadata } from "./videometadata";


export class GetTextDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=TextDetections", elemType: shared.TextDetectionResult })
  textDetections?: TextDetectionResult[];

  @Metadata({ data: "json, name=TextModelVersion" })
  textModelVersion?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
