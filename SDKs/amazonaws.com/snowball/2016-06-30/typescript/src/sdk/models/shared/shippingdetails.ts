import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Shipment } from "./shipment";
import { Shipment } from "./shipment";
import { ShippingOptionEnum } from "./shippingoptionenum";


// ShippingDetails
/** 
 * A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
**/
export class ShippingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=InboundShipment" })
  inboundShipment?: Shipment;

  @Metadata({ data: "json, name=OutboundShipment" })
  outboundShipment?: Shipment;

  @Metadata({ data: "json, name=ShippingOption" })
  shippingOption?: ShippingOptionEnum;
}
