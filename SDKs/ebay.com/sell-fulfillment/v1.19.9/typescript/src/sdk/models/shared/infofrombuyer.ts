import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrackingInfo } from "./trackinginfo";


// InfoFromBuyer
/** 
 * This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
**/
export class InfoFromBuyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=returnShipmentTracking", elemType: shared.TrackingInfo })
  returnShipmentTracking?: TrackingInfo[];
}
