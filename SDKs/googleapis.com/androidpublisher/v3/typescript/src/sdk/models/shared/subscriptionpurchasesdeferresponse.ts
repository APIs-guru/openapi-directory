import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionPurchasesDeferResponse
/** 
 * Response for the purchases.subscriptions.defer API.
**/
export class SubscriptionPurchasesDeferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newExpiryTimeMillis" })
  newExpiryTimeMillis?: string;
}
