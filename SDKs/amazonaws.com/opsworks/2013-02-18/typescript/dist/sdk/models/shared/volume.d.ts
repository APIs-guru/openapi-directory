import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an instance's Amazon EBS volume.
**/
export declare class Volume extends SpeakeasyBase {
    availabilityZone?: string;
    device?: string;
    ec2VolumeId?: string;
    encrypted?: boolean;
    instanceId?: string;
    iops?: number;
    mountPoint?: string;
    name?: string;
    raidArrayId?: string;
    region?: string;
    size?: number;
    status?: string;
    volumeId?: string;
    volumeType?: string;
}
