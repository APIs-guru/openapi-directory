import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InappPurchase
/** 
 * An InappPurchase resource indicates the status of a user's inapp product purchase.
**/
export class InappPurchase extends SpeakeasyBase {
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
  purchaseTime?: string;

  @SpeakeasyMetadata()
  purchaseType?: number;
}
