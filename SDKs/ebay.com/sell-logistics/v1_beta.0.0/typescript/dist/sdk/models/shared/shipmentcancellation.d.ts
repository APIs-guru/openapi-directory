import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
**/
export declare class ShipmentCancellation extends SpeakeasyBase {
    cancellationRequestedDate?: string;
    cancellationStatus?: string;
}
