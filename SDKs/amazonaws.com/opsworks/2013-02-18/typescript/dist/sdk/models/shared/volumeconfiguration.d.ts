import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an Amazon EBS volume configuration.
**/
export declare class VolumeConfiguration extends SpeakeasyBase {
    encrypted?: boolean;
    iops?: number;
    mountPoint: string;
    numberOfDisks: number;
    raidLevel?: number;
    size: number;
    volumeType?: string;
}
