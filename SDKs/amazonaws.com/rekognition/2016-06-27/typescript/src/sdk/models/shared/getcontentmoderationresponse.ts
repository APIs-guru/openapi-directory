import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { ContentModerationDetection } from "./contentmoderationdetection";
import { VideoMetadata } from "./videometadata";


export class GetContentModerationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=ModerationLabels", elemType: shared.ContentModerationDetection })
  moderationLabels?: ContentModerationDetection[];

  @Metadata({ data: "json, name=ModerationModelVersion" })
  moderationModelVersion?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
