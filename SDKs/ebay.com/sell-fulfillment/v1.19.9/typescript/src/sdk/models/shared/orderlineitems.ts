import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderLineItems
/** 
 * This type is used by the lineItems array that is used to identify one or more line items in the order with the payment dispute.
**/
export class OrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;
}
