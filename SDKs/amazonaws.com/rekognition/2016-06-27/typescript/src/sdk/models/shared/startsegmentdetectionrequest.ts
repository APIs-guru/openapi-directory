import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartSegmentDetectionFilters } from "./startsegmentdetectionfilters";
import { NotificationChannel } from "./notificationchannel";
import { SegmentTypeEnum } from "./segmenttypeenum";
import { Video } from "./video";



export class StartSegmentDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: StartSegmentDetectionFilters;

  @SpeakeasyMetadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @SpeakeasyMetadata({ data: "json, name=SegmentTypes" })
  segmentTypes: SegmentTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Video" })
  video: Video;
}
