import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// ApnsMessage
/** 
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
**/
export class ApnsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSPushType" })
  apnsPushType?: string;

  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Badge" })
  badge?: number;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=CollapseId" })
  collapseId?: string;

  @Metadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @Metadata({ data: "json, name=PreferredAuthenticationMethod" })
  preferredAuthenticationMethod?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: string;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @Metadata({ data: "json, name=Sound" })
  sound?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=ThreadId" })
  threadId?: string;

  @Metadata({ data: "json, name=TimeToLive" })
  timeToLive?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
