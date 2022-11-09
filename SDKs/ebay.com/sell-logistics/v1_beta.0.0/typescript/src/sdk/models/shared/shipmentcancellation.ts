import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShipmentCancellation
/** 
 * This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
**/
export class ShipmentCancellation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationRequestedDate" })
  cancellationRequestedDate?: string;

  @Metadata({ data: "json, name=cancellationStatus" })
  cancellationStatus?: string;
}
