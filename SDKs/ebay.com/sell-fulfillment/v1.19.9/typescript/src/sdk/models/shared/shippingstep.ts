import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtendedContact } from "./extendedcontact";


// ShippingStep
/** 
 * This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
**/
export class ShippingStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=shipTo" })
  shipTo?: ExtendedContact;

  @Metadata({ data: "json, name=shipToReferenceId" })
  shipToReferenceId?: string;

  @Metadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @Metadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;
}
