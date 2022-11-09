import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShippingFulfillment } from "./shippingfulfillment";
import { Error } from "./error";


// ShippingFulfillmentPagedCollection
/** 
 * This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
**/
export class ShippingFulfillmentPagedCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfillments", elemType: shared.ShippingFulfillment })
  fulfillments?: ShippingFulfillment[];

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
