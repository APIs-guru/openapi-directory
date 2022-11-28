import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";



// DefaultPushNotificationMessage
/** 
 * Specifies the default settings and content for a push notification that's sent directly to an endpoint.
**/
export class DefaultPushNotificationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
