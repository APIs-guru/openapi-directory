import { SpeakeasyBase } from "../../../internal/utils";
import { StartSegmentDetectionFilters } from "./startsegmentdetectionfilters";
import { NotificationChannel } from "./notificationchannel";
import { SegmentTypeEnum } from "./segmenttypeenum";
import { Video } from "./video";
export declare class StartSegmentDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    filters?: StartSegmentDetectionFilters;
    jobTag?: string;
    notificationChannel?: NotificationChannel;
    segmentTypes: SegmentTypeEnum[];
    video: Video;
}
