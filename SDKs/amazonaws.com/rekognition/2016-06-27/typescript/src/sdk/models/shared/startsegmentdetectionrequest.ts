import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartSegmentDetectionFilters } from "./startsegmentdetectionfilters";
import { NotificationChannel } from "./notificationchannel";
import { SegmentTypeEnum } from "./segmenttypeenum";
import { Video } from "./video";


export class StartSegmentDetectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: StartSegmentDetectionFilters;

  @Metadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @Metadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @Metadata({ data: "json, name=SegmentTypes" })
  segmentTypes: SegmentTypeEnum[];

  @Metadata({ data: "json, name=Video" })
  video: Video;
}
