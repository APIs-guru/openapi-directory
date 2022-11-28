import { SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";
/**
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
**/
export declare class PromptSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    maxRetries: number;
    messageGroups: MessageGroup[];
}
