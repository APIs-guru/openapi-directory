import { SpeakeasyBase } from "../../../internal/utils";
import { Shipment } from "./shipment";
import { ShippingOptionEnum } from "./shippingoptionenum";
/**
 * A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
**/
export declare class ShippingDetails extends SpeakeasyBase {
    inboundShipment?: Shipment;
    outboundShipment?: Shipment;
    shippingOption?: ShippingOptionEnum;
}
