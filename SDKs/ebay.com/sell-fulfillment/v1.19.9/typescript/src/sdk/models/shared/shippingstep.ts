import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtendedContact } from "./extendedcontact";



// ShippingStep
/** 
 * This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
**/
export class ShippingStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: ExtendedContact;

  @SpeakeasyMetadata({ data: "json, name=shipToReferenceId" })
  shipToReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" })
  shippingCarrierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingServiceCode" })
  shippingServiceCode?: string;
}
