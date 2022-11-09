import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderLineItems
/** 
 * This type is used by the lineItems array that is used to identify one or more line items in the order with the payment dispute.
**/
export class OrderLineItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;
}
