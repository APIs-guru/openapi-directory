import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Shipment
/** 
 * The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.
**/
export class Shipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TrackingNumber" })
  trackingNumber?: string;
}
