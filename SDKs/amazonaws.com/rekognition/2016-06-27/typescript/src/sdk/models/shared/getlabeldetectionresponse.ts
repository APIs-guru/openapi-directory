import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { LabelDetection } from "./labeldetection";
import { VideoMetadata } from "./videometadata";



export class GetLabelDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LabelModelVersion" })
  labelModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Labels", elemType: LabelDetection })
  labels?: LabelDetection[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
