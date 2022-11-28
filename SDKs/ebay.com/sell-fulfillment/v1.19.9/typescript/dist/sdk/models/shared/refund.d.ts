import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is the base type of the issueRefund response payload. As long as the issueRefund method does not trigger an error, a response payload will be returned.
**/
export declare class Refund extends SpeakeasyBase {
    refundId?: string;
    refundStatus?: string;
}
