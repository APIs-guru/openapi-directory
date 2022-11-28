import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";
export declare class StartCelebrityRecognitionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    jobTag?: string;
    notificationChannel?: NotificationChannel;
    video: Video;
}
