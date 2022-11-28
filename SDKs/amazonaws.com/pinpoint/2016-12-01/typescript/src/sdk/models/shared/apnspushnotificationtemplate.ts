import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";



// ApnsPushNotificationTemplate
/** 
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
**/
export class ApnsPushNotificationTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=Sound" })
  sound?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
