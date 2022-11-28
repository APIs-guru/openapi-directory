import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductPurchase
/** 
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
**/
export class ProductPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consumptionState?: number;

  @SpeakeasyMetadata()
  developerPayload?: string;

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  orderId?: string;

  @SpeakeasyMetadata()
  purchaseState?: number;

  @SpeakeasyMetadata()
  purchaseTimeMillis?: string;

  @SpeakeasyMetadata()
  purchaseType?: number;
}
