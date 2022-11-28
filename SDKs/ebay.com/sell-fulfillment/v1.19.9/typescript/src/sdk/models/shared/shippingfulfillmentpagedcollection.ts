import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingFulfillment } from "./shippingfulfillment";
import { Error } from "./error";



// ShippingFulfillmentPagedCollection
/** 
 * This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
**/
export class ShippingFulfillmentPagedCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fulfillments", elemType: ShippingFulfillment })
  fulfillments?: ShippingFulfillment[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
