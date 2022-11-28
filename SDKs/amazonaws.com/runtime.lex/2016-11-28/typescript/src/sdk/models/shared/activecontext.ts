import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveContextTimeToLive } from "./activecontexttimetolive";



// ActiveContext
/** 
 * A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
**/
export class ActiveContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=timeToLive" })
  timeToLive: ActiveContextTimeToLive;
}
