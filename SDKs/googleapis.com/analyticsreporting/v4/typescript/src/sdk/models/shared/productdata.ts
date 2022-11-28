import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductData
/** 
 * Details of the products in an e-commerce transaction.
**/
export class ProductData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemRevenue" })
  itemRevenue?: number;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=productQuantity" })
  productQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=productSku" })
  productSku?: string;
}
