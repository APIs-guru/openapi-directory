import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an instance's RAID array.
**/
export declare class RaidArray extends SpeakeasyBase {
    availabilityZone?: string;
    createdAt?: string;
    device?: string;
    instanceId?: string;
    iops?: number;
    mountPoint?: string;
    name?: string;
    numberOfDisks?: number;
    raidArrayId?: string;
    raidLevel?: number;
    size?: number;
    stackId?: string;
    volumeType?: string;
}
