import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
import { OrderRefund } from "./orderrefund";
import { Amount } from "./amount";



// PaymentSummary
/** 
 * This type contains information about the various monetary exchanges that apply to the net balance due for the order.
**/
export class PaymentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payments", elemType: Payment })
  payments?: Payment[];

  @SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefund })
  refunds?: OrderRefund[];

  @SpeakeasyMetadata({ data: "json, name=totalDueSeller" })
  totalDueSeller?: Amount;
}
