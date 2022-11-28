import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReceiptLineItem
/** 
 * Receipt line item, comprised of a product or item and a price (if available)
**/
export class ReceiptLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ItemDescription" })
  itemDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemPrice" })
  itemPrice?: number;
}
