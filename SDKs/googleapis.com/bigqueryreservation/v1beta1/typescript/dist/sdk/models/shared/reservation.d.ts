import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reservation is a mechanism used to guarantee slots to users.
**/
export declare class Reservation extends SpeakeasyBase {
    concurrency?: string;
    creationTime?: string;
    ignoreIdleSlots?: boolean;
    multiRegionAuxiliary?: boolean;
    name?: string;
    slotCapacity?: string;
    updateTime?: string;
}
/**
 * A reservation is a mechanism used to guarantee slots to users.
**/
export declare class ReservationInput extends SpeakeasyBase {
    concurrency?: string;
    ignoreIdleSlots?: boolean;
    multiRegionAuxiliary?: boolean;
    name?: string;
    slotCapacity?: string;
}
