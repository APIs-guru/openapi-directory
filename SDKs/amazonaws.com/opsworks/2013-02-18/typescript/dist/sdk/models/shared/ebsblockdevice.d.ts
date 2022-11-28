import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";
/**
 * Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
**/
export declare class EbsBlockDevice extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    iops?: number;
    snapshotId?: string;
    volumeSize?: number;
    volumeType?: VolumeTypeEnum;
}
