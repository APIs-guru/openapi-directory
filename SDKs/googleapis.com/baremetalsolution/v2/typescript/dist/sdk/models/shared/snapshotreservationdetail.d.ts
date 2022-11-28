import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about snapshot space reservation and usage on the storage volume.
**/
export declare class SnapshotReservationDetail extends SpeakeasyBase {
    reservedSpaceGib?: string;
    reservedSpacePercent?: number;
    reservedSpaceRemainingGib?: string;
    reservedSpaceUsedPercent?: number;
}
