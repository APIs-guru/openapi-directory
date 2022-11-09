import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// LineItemRefund
/** 
 * This type contains refund information for a line item.
**/
export class LineItemRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=refundDate" })
  refundDate?: string;

  @Metadata({ data: "json, name=refundId" })
  refundId?: string;

  @Metadata({ data: "json, name=refundReferenceId" })
  refundReferenceId?: string;
}
