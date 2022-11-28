import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { PaymentHold } from "./paymenthold";
/**
 * This type is used to provide details about the seller payments for an order.
**/
export declare class Payment extends SpeakeasyBase {
    amount?: Amount;
    paymentDate?: string;
    paymentHolds?: PaymentHold[];
    paymentMethod?: string;
    paymentReferenceId?: string;
    paymentStatus?: string;
}
