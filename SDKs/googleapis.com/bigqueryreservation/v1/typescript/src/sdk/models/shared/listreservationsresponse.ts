import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reservation } from "./reservation";


// ListReservationsResponse
/** 
 * The response for ReservationService.ListReservations.
**/
export class ListReservationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reservations", elemType: shared.Reservation })
  reservations?: Reservation[];
}
