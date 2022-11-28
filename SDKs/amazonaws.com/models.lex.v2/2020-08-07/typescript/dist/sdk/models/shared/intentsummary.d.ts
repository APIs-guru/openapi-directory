import { SpeakeasyBase } from "../../../internal/utils";
import { InputContext } from "./inputcontext";
import { OutputContext } from "./outputcontext";
/**
 * Summary information about an intent returned by the <code>ListIntents</code> operation.
**/
export declare class IntentSummary extends SpeakeasyBase {
    description?: string;
    inputContexts?: InputContext[];
    intentId?: string;
    intentName?: string;
    lastUpdatedDateTime?: Date;
    outputContexts?: OutputContext[];
    parentIntentSignature?: string;
}
