import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";


// GcmMessage
/** 
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
export class GcmMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=CollapseKey" })
  collapseKey?: string;

  @Metadata({ data: "json, name=Data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=IconReference" })
  iconReference?: string;

  @Metadata({ data: "json, name=ImageIconUrl" })
  imageIconUrl?: string;

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: string;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=RestrictedPackageName" })
  restrictedPackageName?: string;

  @Metadata({ data: "json, name=SilentPush" })
  silentPush?: boolean;

  @Metadata({ data: "json, name=SmallImageIconUrl" })
  smallImageIconUrl?: string;

  @Metadata({ data: "json, name=Sound" })
  sound?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=TimeToLive" })
  timeToLive?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
