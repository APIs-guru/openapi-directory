import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartTextDetectionFilters } from "./starttextdetectionfilters";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";



export class StartTextDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: StartTextDetectionFilters;

  @SpeakeasyMetadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @SpeakeasyMetadata({ data: "json, name=Video" })
  video: Video;
}
