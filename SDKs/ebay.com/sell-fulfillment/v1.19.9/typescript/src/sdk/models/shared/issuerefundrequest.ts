import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleAmount } from "./simpleamount";
import { RefundItem } from "./refunditem";


// IssueRefundRequest
/** 
 * The base type used by the request payload of the issueRefund method.
**/
export class IssueRefundRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=orderLevelRefundAmount" })
  orderLevelRefundAmount?: SimpleAmount;

  @Metadata({ data: "json, name=reasonForRefund" })
  reasonForRefund?: string;

  @Metadata({ data: "json, name=refundItems", elemType: shared.RefundItem })
  refundItems?: RefundItem[];
}
