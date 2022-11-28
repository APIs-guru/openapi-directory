import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains refund information for a line item.
**/
export declare class LineItemRefund extends SpeakeasyBase {
    amount?: Amount;
    refundDate?: string;
    refundId?: string;
    refundReferenceId?: string;
}
