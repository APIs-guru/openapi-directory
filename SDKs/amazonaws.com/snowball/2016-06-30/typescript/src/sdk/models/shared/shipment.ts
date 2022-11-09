import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Shipment
/** 
 * The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.
**/
export class Shipment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=TrackingNumber" })
  trackingNumber?: string;
}
