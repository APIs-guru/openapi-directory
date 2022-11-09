import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Payment } from "./payment";
import { OrderRefund } from "./orderrefund";
import { Amount } from "./amount";


// PaymentSummary
/** 
 * This type contains information about the various monetary exchanges that apply to the net balance due for the order.
**/
export class PaymentSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=payments", elemType: shared.Payment })
  payments?: Payment[];

  @Metadata({ data: "json, name=refunds", elemType: shared.OrderRefund })
  refunds?: OrderRefund[];

  @Metadata({ data: "json, name=totalDueSeller" })
  totalDueSeller?: Amount;
}
