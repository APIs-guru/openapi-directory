import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";
export declare class StartFaceSearchRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    collectionId: string;
    faceMatchThreshold?: number;
    jobTag?: string;
    notificationChannel?: NotificationChannel;
    video: Video;
}
