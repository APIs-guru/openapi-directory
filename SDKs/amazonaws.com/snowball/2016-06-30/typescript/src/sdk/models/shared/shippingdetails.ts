import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Shipment } from "./shipment";
import { ShippingOptionEnum } from "./shippingoptionenum";



// ShippingDetails
/** 
 * A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
**/
export class ShippingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InboundShipment" })
  inboundShipment?: Shipment;

  @SpeakeasyMetadata({ data: "json, name=OutboundShipment" })
  outboundShipment?: Shipment;

  @SpeakeasyMetadata({ data: "json, name=ShippingOption" })
  shippingOption?: ShippingOptionEnum;
}
