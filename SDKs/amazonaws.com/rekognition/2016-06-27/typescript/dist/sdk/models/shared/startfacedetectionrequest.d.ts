import { SpeakeasyBase } from "../../../internal/utils";
import { FaceAttributesEnum } from "./faceattributesenum";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";
export declare class StartFaceDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    faceAttributes?: FaceAttributesEnum;
    jobTag?: string;
    notificationChannel?: NotificationChannel;
    video: Video;
}
