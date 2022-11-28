import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShipmentCancellation
/** 
 * This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
**/
export class ShipmentCancellation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationRequestedDate" })
  cancellationRequestedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationStatus" })
  cancellationStatus?: string;
}
