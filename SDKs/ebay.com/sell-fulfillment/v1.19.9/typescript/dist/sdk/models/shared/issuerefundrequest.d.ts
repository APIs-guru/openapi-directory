import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
import { RefundItem } from "./refunditem";
/**
 * The base type used by the request payload of the issueRefund method.
**/
export declare class IssueRefundRequest extends SpeakeasyBase {
    comment?: string;
    orderLevelRefundAmount?: SimpleAmount;
    reasonForRefund?: string;
    refundItems?: RefundItem[];
}
