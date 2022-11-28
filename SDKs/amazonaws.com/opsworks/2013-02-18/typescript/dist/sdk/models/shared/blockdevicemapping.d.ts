import { SpeakeasyBase } from "../../../internal/utils";
import { EbsBlockDevice } from "./ebsblockdevice";
/**
 * Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type.
**/
export declare class BlockDeviceMapping extends SpeakeasyBase {
    deviceName?: string;
    ebs?: EbsBlockDevice;
    noDevice?: string;
    virtualName?: string;
}
