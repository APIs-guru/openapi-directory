import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";



// BaiduMessage
/** 
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.
**/
export class BaiduMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=IconReference" })
  iconReference?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageIconUrl" })
  imageIconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SmallImageIconUrl" })
  smallImageIconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Sound" })
  sound?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TimeToLive" })
  timeToLive?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
