import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionPurchasesAcknowledgeRequest
/** 
 * Request for the purchases.subscriptions.acknowledge API.
**/
export class SubscriptionPurchasesAcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerPayload" })
  developerPayload?: string;
}
