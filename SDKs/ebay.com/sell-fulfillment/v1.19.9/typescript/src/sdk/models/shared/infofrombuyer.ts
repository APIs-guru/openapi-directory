import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackingInfo } from "./trackinginfo";



// InfoFromBuyer
/** 
 * This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
**/
export class InfoFromBuyer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=returnShipmentTracking", elemType: TrackingInfo })
  returnShipmentTracking?: TrackingInfo[];
}
