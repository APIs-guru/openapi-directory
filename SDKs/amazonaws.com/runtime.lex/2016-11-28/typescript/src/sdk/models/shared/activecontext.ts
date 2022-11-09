import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActiveContextTimeToLive } from "./activecontexttimetolive";


// ActiveContext
/** 
 * A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
**/
export class ActiveContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parameters" })
  parameters: Map<string, string>;

  @Metadata({ data: "json, name=timeToLive" })
  timeToLive: ActiveContextTimeToLive;
}
