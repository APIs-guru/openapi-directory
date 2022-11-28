import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// LineItemRefund
/** 
 * This type contains refund information for a line item.
**/
export class LineItemRefund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=refundDate" })
  refundDate?: string;

  @SpeakeasyMetadata({ data: "json, name=refundId" })
  refundId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundReferenceId" })
  refundReferenceId?: string;
}
