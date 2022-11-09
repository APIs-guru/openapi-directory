import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VoidedPurchase
/** 
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
**/
export class VoidedPurchase extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=purchaseTimeMillis" })
  purchaseTimeMillis?: string;

  @Metadata({ data: "json, name=purchaseToken" })
  purchaseToken?: string;

  @Metadata({ data: "json, name=voidedReason" })
  voidedReason?: number;

  @Metadata({ data: "json, name=voidedSource" })
  voidedSource?: number;

  @Metadata({ data: "json, name=voidedTimeMillis" })
  voidedTimeMillis?: string;
}
