import { SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
/**
 * A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
**/
export declare class AttachedDisk extends SpeakeasyBase {
    deviceName?: string;
    existingDisk?: string;
    newDisk?: Disk;
}
