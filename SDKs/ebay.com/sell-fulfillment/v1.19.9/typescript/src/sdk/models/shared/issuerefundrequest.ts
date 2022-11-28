import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAmount } from "./simpleamount";
import { RefundItem } from "./refunditem";



// IssueRefundRequest
/** 
 * The base type used by the request payload of the issueRefund method.
**/
export class IssueRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=orderLevelRefundAmount" })
  orderLevelRefundAmount?: SimpleAmount;

  @SpeakeasyMetadata({ data: "json, name=reasonForRefund" })
  reasonForRefund?: string;

  @SpeakeasyMetadata({ data: "json, name=refundItems", elemType: RefundItem })
  refundItems?: RefundItem[];
}
