import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActiveContextTimeToLive } from "./activecontexttimetolive";
/**
 * A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
**/
export declare class ActiveContext extends SpeakeasyBase {
    name: string;
    parameters: Map<string, string>;
    timeToLive: ActiveContextTimeToLive;
}
