import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
export declare class Statement extends SpeakeasyBase {
    messages: Message[];
    responseCard?: string;
}
