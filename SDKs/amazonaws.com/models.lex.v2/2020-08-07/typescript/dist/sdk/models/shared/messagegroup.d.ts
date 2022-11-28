import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * Provides one or more messages that Amazon Lex should send to the user.
**/
export declare class MessageGroup extends SpeakeasyBase {
    message: Message;
    variations?: Message[];
}
