import { SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";
/**
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
**/
export declare class ResponseSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    messageGroups: MessageGroup[];
}
