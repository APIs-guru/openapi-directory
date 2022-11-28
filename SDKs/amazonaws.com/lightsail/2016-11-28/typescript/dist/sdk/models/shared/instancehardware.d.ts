import { SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
/**
 * Describes the hardware for the instance.
**/
export declare class InstanceHardware extends SpeakeasyBase {
    cpuCount?: number;
    disks?: Disk[];
    ramSizeInGb?: number;
}
