import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// Message
/** 
 * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=ImageIconUrl" })
  imageIconUrl?: string;

  @Metadata({ data: "json, name=ImageSmallIconUrl" })
  imageSmallIconUrl?: string;

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=JsonBody" })
  jsonBody?: string;

  @Metadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @Metadata({ data: "json, name=TimeToLive" })
  timeToLive?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
