import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// DefaultPushNotificationTemplate
/** 
 * Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
**/
export class DefaultPushNotificationTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=Sound" })
  sound?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
