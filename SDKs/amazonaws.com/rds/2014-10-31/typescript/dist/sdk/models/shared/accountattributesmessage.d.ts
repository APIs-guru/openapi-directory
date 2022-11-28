import { SpeakeasyBase } from "../../../internal/utils";
import { AccountQuota } from "./accountquota";
/**
 * Data returned by the <b>DescribeAccountAttributes</b> action.
**/
export declare class AccountAttributesMessage extends SpeakeasyBase {
    accountQuotas?: AccountQuota[];
}
