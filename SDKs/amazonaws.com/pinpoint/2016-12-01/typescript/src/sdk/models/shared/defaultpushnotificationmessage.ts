import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// DefaultPushNotificationMessage
/** 
 * Specifies the default settings and content for a push notification that's sent directly to an endpoint.
**/
export class DefaultPushNotificationMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
