import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { ContentModerationDetection } from "./contentmoderationdetection";
import { VideoMetadata } from "./videometadata";



export class GetContentModerationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ModerationLabels", elemType: ContentModerationDetection })
  moderationLabels?: ContentModerationDetection[];

  @SpeakeasyMetadata({ data: "json, name=ModerationModelVersion" })
  moderationModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
