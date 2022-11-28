import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { Intent } from "./intent";
/**
 * The state of the user's session with Amazon Lex V2.
**/
export declare class SessionState extends SpeakeasyBase {
    activeContexts?: ActiveContext[];
    dialogAction?: DialogAction;
    intent?: Intent;
    originatingRequestId?: string;
    sessionAttributes?: Map<string, string>;
}
