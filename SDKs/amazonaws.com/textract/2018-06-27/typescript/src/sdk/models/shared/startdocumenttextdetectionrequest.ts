import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentLocation } from "./documentlocation";
import { NotificationChannel } from "./notificationchannel";
import { OutputConfig } from "./outputconfig";



export class StartDocumentTextDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentLocation" })
  documentLocation: DocumentLocation;

  @SpeakeasyMetadata({ data: "json, name=JobTag" })
  jobTag?: string;

  @SpeakeasyMetadata({ data: "json, name=KMSKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationChannel" })
  notificationChannel?: NotificationChannel;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig?: OutputConfig;
}
