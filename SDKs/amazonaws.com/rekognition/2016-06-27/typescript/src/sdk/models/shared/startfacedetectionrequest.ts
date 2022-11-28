import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceAttributesEnum } from "./faceattributesenum";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";



export class StartFaceDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FaceAttributes" })
  faceAttributes?: FaceAttributesEnum;

  @SpeakeasyMetadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @SpeakeasyMetadata({ data: "json, name=Video" })
  video: Video;
}
