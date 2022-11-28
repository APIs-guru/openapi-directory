import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VoidedPurchase
/** 
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
export class VoidedPurchase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseTimeMillis" })
  purchaseTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseToken" })
  purchaseToken?: string;

  @SpeakeasyMetadata({ data: "json, name=voidedReason" })
  voidedReason?: number;

  @SpeakeasyMetadata({ data: "json, name=voidedSource" })
  voidedSource?: number;

  @SpeakeasyMetadata({ data: "json, name=voidedTimeMillis" })
  voidedTimeMillis?: string;
}
