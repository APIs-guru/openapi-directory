import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// ApnsPushNotificationTemplate
/** 
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
**/
export class ApnsPushNotificationTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=Sound" })
  sound?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
