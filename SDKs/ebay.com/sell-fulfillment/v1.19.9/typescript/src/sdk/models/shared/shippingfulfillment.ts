import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItemReference } from "./lineitemreference";


// ShippingFulfillment
/** 
 * This type contains the complete details of an existing fulfillment for an order.
**/
export class ShippingFulfillment extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfillmentId" })
  fulfillmentId?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.LineItemReference })
  lineItems?: LineItemReference[];

  @Metadata({ data: "json, name=shipmentTrackingNumber" })
  shipmentTrackingNumber?: string;

  @Metadata({ data: "json, name=shippedDate" })
  shippedDate?: string;

  @Metadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;
}
