import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveContextTimeToLive } from "./activecontexttimetolive";
/**
 * <p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p>
**/
export declare class ActiveContext extends SpeakeasyBase {
    contextAttributes: Map<string, string>;
    name: string;
    timeToLive: ActiveContextTimeToLive;
}
