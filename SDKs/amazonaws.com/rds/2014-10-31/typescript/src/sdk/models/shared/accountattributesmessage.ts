import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountQuota } from "./accountquota";



// AccountAttributesMessage
/** 
 * Data returned by the <b>DescribeAccountAttributes</b> action.
**/
export class AccountAttributesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AccountQuota })
  accountQuotas?: AccountQuota[];
}
