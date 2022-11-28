import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains information about a refund issued for an order. This does not include line item level refunds.
**/
export declare class OrderRefund extends SpeakeasyBase {
    amount?: Amount;
    refundDate?: string;
    refundId?: string;
    refundReferenceId?: string;
    refundStatus?: string;
}
