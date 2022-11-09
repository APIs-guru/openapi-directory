import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Order
/** 
 * This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;
}
