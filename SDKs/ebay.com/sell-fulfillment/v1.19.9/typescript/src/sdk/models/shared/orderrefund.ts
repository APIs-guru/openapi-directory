import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// OrderRefund
/** 
 * This type contains information about a refund issued for an order. This does not include line item level refunds.
**/
export class OrderRefund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=refundDate" })
  refundDate?: string;

  @SpeakeasyMetadata({ data: "json, name=refundId" })
  refundId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundReferenceId" })
  refundReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundStatus" })
  refundStatus?: string;
}
