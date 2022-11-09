import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// AdmMessage
/** 
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.
**/
export class AdmMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=ConsolidationKey" })
  consolidationKey?: string;

  @Metadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=ExpiresAfter" })
  expiresAfter?: string;

  @Metadata({ data: "json, name=IconReference" })
  iconReference?: string;

  @Metadata({ data: "json, name=ImageIconUrl" })
  imageIconUrl?: string;

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=MD5" })
  md5?: string;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @Metadata({ data: "json, name=SmallImageIconUrl" })
  smallImageIconUrl?: string;

  @Metadata({ data: "json, name=Sound" })
  sound?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
