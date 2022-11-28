import { SpeakeasyBase } from "../../../internal/utils";
import { TrackingInfo } from "./trackinginfo";
/**
 * This container is returned if the buyer is returning one or more line items in an order that is associated with the payment dispute, and that buyer has provided return shipping tracking information and/or a note about the return.
**/
export declare class InfoFromBuyer extends SpeakeasyBase {
    note?: string;
    returnShipmentTracking?: TrackingInfo[];
}
