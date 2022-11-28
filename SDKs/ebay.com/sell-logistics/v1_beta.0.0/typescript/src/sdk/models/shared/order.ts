import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Order
/** 
 * This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;
}
