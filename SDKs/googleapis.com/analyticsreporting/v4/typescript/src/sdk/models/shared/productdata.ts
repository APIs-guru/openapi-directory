import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductData
/** 
 * Details of the products in an e-commerce transaction.
**/
export class ProductData extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemRevenue" })
  itemRevenue?: number;

  @Metadata({ data: "json, name=productName" })
  productName?: string;

  @Metadata({ data: "json, name=productQuantity" })
  productQuantity?: string;

  @Metadata({ data: "json, name=productSku" })
  productSku?: string;
}
