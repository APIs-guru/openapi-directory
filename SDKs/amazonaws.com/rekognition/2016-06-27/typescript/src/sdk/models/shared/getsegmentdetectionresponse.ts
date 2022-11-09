import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioMetadata } from "./audiometadata";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { SegmentDetection } from "./segmentdetection";
import { SegmentTypeInfo } from "./segmenttypeinfo";
import { VideoMetadata } from "./videometadata";


export class GetSegmentDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioMetadata", elemType: shared.AudioMetadata })
  audioMetadata?: AudioMetadata[];

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Segments", elemType: shared.SegmentDetection })
  segments?: SegmentDetection[];

  @Metadata({ data: "json, name=SelectedSegmentTypes", elemType: shared.SegmentTypeInfo })
  selectedSegmentTypes?: SegmentTypeInfo[];

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=VideoMetadata", elemType: shared.VideoMetadata })
  videoMetadata?: VideoMetadata[];
}
