import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscriptionPurchasesAcknowledgeRequest
/** 
 * Request for the purchases.subscriptions.acknowledge API.
**/
export class SubscriptionPurchasesAcknowledgeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerPayload" })
  developerPayload?: string;
}
