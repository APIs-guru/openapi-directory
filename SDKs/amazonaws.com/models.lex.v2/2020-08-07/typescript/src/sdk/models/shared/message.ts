import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPayload } from "./custompayload";
import { ImageResponseCard } from "./imageresponsecard";
import { PlainTextMessage } from "./plaintextmessage";
import { SsmlMessage } from "./ssmlmessage";


// Message
/** 
 * The object that provides message text and it's type.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPayload" })
  customPayload?: CustomPayload;

  @Metadata({ data: "json, name=imageResponseCard" })
  imageResponseCard?: ImageResponseCard;

  @Metadata({ data: "json, name=plainTextMessage" })
  plainTextMessage?: PlainTextMessage;

  @Metadata({ data: "json, name=ssmlMessage" })
  ssmlMessage?: SsmlMessage;
}
