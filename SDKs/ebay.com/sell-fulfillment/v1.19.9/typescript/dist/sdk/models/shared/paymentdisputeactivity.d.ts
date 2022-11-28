import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by each recorded activity on a payment dispute, from creation to resolution.
**/
export declare class PaymentDisputeActivity extends SpeakeasyBase {
    activityDate?: string;
    activityType?: string;
    actor?: string;
}
