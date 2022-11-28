import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";



// ListReservationsResponse
/** 
 * The response for ReservationService.ListReservations.
**/
export class ListReservationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reservations", elemType: Reservation })
  reservations?: Reservation[];
}
