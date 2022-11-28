import { SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";
/**
 * The response for ReservationService.ListReservations.
**/
export declare class ListReservationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    reservations?: Reservation[];
}
