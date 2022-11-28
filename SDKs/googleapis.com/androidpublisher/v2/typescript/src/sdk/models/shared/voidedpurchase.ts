import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VoidedPurchase
/** 
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
export class VoidedPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  purchaseTimeMillis?: string;

  @SpeakeasyMetadata()
  purchaseToken?: string;

  @SpeakeasyMetadata()
  voidedTimeMillis?: string;
}
