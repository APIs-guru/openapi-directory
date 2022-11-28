import { SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";
/**
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
**/
export declare class StillWaitingResponseSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    frequencyInSeconds: number;
    messageGroups: MessageGroup[];
    timeoutInSeconds: number;
}
