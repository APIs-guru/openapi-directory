import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";


export class StartCelebrityRecognitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @Metadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @Metadata({ data: "json, name=Video" })
  video: Video;
}
