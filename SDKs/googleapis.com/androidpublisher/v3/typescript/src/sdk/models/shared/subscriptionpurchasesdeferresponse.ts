import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscriptionPurchasesDeferResponse
/** 
 * Response for the purchases.subscriptions.defer API.
**/
export class SubscriptionPurchasesDeferResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=newExpiryTimeMillis" })
  newExpiryTimeMillis?: string;
}
