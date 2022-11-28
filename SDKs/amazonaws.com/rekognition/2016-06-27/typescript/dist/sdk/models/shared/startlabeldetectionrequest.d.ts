import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";
export declare class StartLabelDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    jobTag?: string;
    minConfidence?: number;
    notificationChannel?: NotificationChannel;
    video: Video;
}
