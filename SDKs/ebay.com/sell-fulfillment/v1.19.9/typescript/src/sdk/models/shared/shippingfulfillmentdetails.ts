import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItemReference } from "./lineitemreference";


// ShippingFulfillmentDetails
/** 
 * This type contains the details for creating a fulfillment for an order.
**/
export class ShippingFulfillmentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItems", elemType: shared.LineItemReference })
  lineItems?: LineItemReference[];

  @Metadata({ data: "json, name=shippedDate" })
  shippedDate?: string;

  @Metadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @Metadata({ data: "json, name=trackingNumber" })
  trackingNumber?: string;
}
