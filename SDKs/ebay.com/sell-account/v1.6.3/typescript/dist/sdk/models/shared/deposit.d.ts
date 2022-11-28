import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";
/**
 * A container that describes the details of a deposit. Used only with motor listings.
**/
export declare class Deposit extends SpeakeasyBase {
    amount?: Amount;
    dueIn?: TimeDuration;
    paymentMethods?: PaymentMethod[];
}
