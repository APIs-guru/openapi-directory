import { SpeakeasyBase } from "../../../internal/utils";
import { EbsInstanceBlockDevice } from "./ebsinstanceblockdevice";
/**
 * The description of a block device mapping.
**/
export declare class InstanceBlockDeviceMapping extends SpeakeasyBase {
    deviceName?: string;
    ebs?: EbsInstanceBlockDevice;
}
