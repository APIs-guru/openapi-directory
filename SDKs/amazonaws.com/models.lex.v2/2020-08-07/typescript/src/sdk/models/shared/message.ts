import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPayload } from "./custompayload";
import { ImageResponseCard } from "./imageresponsecard";
import { PlainTextMessage } from "./plaintextmessage";
import { SsmlMessage } from "./ssmlmessage";



// Message
/** 
 * The object that provides message text and it's type.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPayload" })
  customPayload?: CustomPayload;

  @SpeakeasyMetadata({ data: "json, name=imageResponseCard" })
  imageResponseCard?: ImageResponseCard;

  @SpeakeasyMetadata({ data: "json, name=plainTextMessage" })
  plainTextMessage?: PlainTextMessage;

  @SpeakeasyMetadata({ data: "json, name=ssmlMessage" })
  ssmlMessage?: SsmlMessage;
}
