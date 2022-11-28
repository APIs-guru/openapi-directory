import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";



// Message
/** 
 * Specifies the content and settings for a push notification that's sent to recipients of a campaign.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageIconUrl" })
  imageIconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageSmallIconUrl" })
  imageSmallIconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=JsonBody" })
  jsonBody?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaUrl" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TimeToLive" })
  timeToLive?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
