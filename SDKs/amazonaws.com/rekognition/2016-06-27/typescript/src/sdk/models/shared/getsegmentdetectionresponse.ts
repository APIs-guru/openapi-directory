import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioMetadata } from "./audiometadata";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { SegmentDetection } from "./segmentdetection";
import { SegmentTypeInfo } from "./segmenttypeinfo";
import { VideoMetadata } from "./videometadata";



export class GetSegmentDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioMetadata", elemType: AudioMetadata })
  audioMetadata?: AudioMetadata[];

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Segments", elemType: SegmentDetection })
  segments?: SegmentDetection[];

  @SpeakeasyMetadata({ data: "json, name=SelectedSegmentTypes", elemType: SegmentTypeInfo })
  selectedSegmentTypes?: SegmentTypeInfo[];

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata", elemType: VideoMetadata })
  videoMetadata?: VideoMetadata[];
}
