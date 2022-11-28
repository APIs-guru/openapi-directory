import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LegacyReference } from "./legacyreference";
import { SimpleAmount } from "./simpleamount";



// RefundItem
/** 
 * This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
**/
export class RefundItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legacyReference" })
  legacyReference?: LegacyReference;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundAmount" })
  refundAmount?: SimpleAmount;
}
