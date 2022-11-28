import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentDisputeActivity } from "./paymentdisputeactivity";
/**
 * This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
**/
export declare class PaymentDisputeActivityHistory extends SpeakeasyBase {
    activity?: PaymentDisputeActivity[];
}
