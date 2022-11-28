import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPayload } from "./custompayload";
import { ImageResponseCard } from "./imageresponsecard";
import { PlainTextMessage } from "./plaintextmessage";
import { SsmlMessage } from "./ssmlmessage";
/**
 * The object that provides message text and it's type.
**/
export declare class Message extends SpeakeasyBase {
    customPayload?: CustomPayload;
    imageResponseCard?: ImageResponseCard;
    plainTextMessage?: PlainTextMessage;
    ssmlMessage?: SsmlMessage;
}
