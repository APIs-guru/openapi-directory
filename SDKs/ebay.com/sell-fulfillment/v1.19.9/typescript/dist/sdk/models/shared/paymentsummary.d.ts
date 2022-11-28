import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
import { OrderRefund } from "./orderrefund";
import { Amount } from "./amount";
/**
 * This type contains information about the various monetary exchanges that apply to the net balance due for the order.
**/
export declare class PaymentSummary extends SpeakeasyBase {
    payments?: Payment[];
    refunds?: OrderRefund[];
    totalDueSeller?: Amount;
}
