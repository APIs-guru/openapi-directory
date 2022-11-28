import { SpeakeasyBase } from "../../../internal/utils";
import { StartTextDetectionFilters } from "./starttextdetectionfilters";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";
export declare class StartTextDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    filters?: StartTextDetectionFilters;
    jobTag?: string;
    notificationChannel?: NotificationChannel;
    video: Video;
}
