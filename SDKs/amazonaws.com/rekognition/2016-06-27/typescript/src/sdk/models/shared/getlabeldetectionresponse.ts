import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { LabelDetection } from "./labeldetection";
import { VideoMetadata } from "./videometadata";


export class GetLabelDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=LabelModelVersion" })
  labelModelVersion?: string;

  @Metadata({ data: "json, name=Labels", elemType: shared.LabelDetection })
  labels?: LabelDetection[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
