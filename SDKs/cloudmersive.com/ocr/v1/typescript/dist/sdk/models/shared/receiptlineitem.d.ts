import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Receipt line item, comprised of a product or item and a price (if available)
**/
export declare class ReceiptLineItem extends SpeakeasyBase {
    itemDescription?: string;
    itemPrice?: number;
}
