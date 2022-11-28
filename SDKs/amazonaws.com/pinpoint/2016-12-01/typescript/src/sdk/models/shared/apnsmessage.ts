import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";



// ApnsMessage
/** 
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
**/
export class ApnsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSPushType" })
  apnsPushType?: string;

  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Badge" })
  badge?: number;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=CollapseId" })
  collapseId?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredAuthenticationMethod" })
  preferredAuthenticationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Sound" })
  sound?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ThreadId" })
  threadId?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeToLive" })
  timeToLive?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
