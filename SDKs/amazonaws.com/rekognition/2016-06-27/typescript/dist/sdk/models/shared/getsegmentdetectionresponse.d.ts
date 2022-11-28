import { SpeakeasyBase } from "../../../internal/utils";
import { AudioMetadata } from "./audiometadata";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { SegmentDetection } from "./segmentdetection";
import { SegmentTypeInfo } from "./segmenttypeinfo";
import { VideoMetadata } from "./videometadata";
export declare class GetSegmentDetectionResponse extends SpeakeasyBase {
    audioMetadata?: AudioMetadata[];
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    segments?: SegmentDetection[];
    selectedSegmentTypes?: SegmentTypeInfo[];
    statusMessage?: string;
    videoMetadata?: VideoMetadata[];
}
