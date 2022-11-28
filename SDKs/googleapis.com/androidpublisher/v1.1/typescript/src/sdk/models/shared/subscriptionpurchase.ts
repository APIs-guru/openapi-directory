import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionPurchase
/** 
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
**/
export class SubscriptionPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoRenewing?: boolean;

  @SpeakeasyMetadata()
  initiationTimestampMsec?: string;

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  validUntilTimestampMsec?: string;
}
