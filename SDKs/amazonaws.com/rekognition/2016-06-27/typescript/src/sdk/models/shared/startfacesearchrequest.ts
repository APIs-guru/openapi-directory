import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";



export class StartFaceSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @SpeakeasyMetadata({ data: "json, name=Video" })
  video: Video;
}
