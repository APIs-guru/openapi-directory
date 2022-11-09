import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputContext } from "./inputcontext";
import { OutputContext } from "./outputcontext";


// IntentSummary
/** 
 * Summary information about an intent returned by the <code>ListIntents</code> operation.
**/
export class IntentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=inputContexts", elemType: shared.InputContext })
  inputContexts?: InputContext[];

  @Metadata({ data: "json, name=intentId" })
  intentId?: string;

  @Metadata({ data: "json, name=intentName" })
  intentName?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=outputContexts", elemType: shared.OutputContext })
  outputContexts?: OutputContext[];

  @Metadata({ data: "json, name=parentIntentSignature" })
  parentIntentSignature?: string;
}
