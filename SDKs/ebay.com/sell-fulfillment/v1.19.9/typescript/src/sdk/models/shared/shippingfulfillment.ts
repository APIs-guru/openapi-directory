import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItemReference } from "./lineitemreference";



// ShippingFulfillment
/** 
 * This type contains the complete details of an existing fulfillment for an order.
**/
export class ShippingFulfillment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fulfillmentId" })
  fulfillmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: LineItemReference })
  lineItems?: LineItemReference[];

  @SpeakeasyMetadata({ data: "json, name=shipmentTrackingNumber" })
  shipmentTrackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shippedDate" })
  shippedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;
}
