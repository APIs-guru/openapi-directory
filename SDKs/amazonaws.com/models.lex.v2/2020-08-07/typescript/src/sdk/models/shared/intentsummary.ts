import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputContext } from "./inputcontext";
import { OutputContext } from "./outputcontext";



// IntentSummary
/** 
 * Summary information about an intent returned by the <code>ListIntents</code> operation.
**/
export class IntentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=inputContexts", elemType: InputContext })
  inputContexts?: InputContext[];

  @SpeakeasyMetadata({ data: "json, name=intentId" })
  intentId?: string;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: OutputContext })
  outputContexts?: OutputContext[];

  @SpeakeasyMetadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;
}
