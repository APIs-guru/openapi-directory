import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItemReference } from "./lineitemreference";



// ShippingFulfillmentDetails
/** 
 * This type contains the details for creating a fulfillment for an order.
**/
export class ShippingFulfillmentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: LineItemReference })
  lineItems?: LineItemReference[];

  @SpeakeasyMetadata({ data: "json, name=shippedDate" })
  shippedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingNumber" })
  trackingNumber?: string;
}
