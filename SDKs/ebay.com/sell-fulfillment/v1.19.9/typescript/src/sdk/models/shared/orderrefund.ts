import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// OrderRefund
/** 
 * This type contains information about a refund issued for an order. This does not include line item level refunds.
**/
export class OrderRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=refundDate" })
  refundDate?: string;

  @Metadata({ data: "json, name=refundId" })
  refundId?: string;

  @Metadata({ data: "json, name=refundReferenceId" })
  refundReferenceId?: string;

  @Metadata({ data: "json, name=refundStatus" })
  refundStatus?: string;
}
