import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReceiptLineItem
/** 
 * Receipt line item, comprised of a product or item and a price (if available)
**/
export class ReceiptLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ItemDescription" })
  itemDescription?: string;

  @Metadata({ data: "json, name=ItemPrice" })
  itemPrice?: number;
}
