import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsInstanceBlockDevice } from "./ebsinstanceblockdevice";



// InstanceBlockDeviceMapping
/** 
 * The description of a block device mapping.
**/
export class InstanceBlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ebs" })
  ebs?: EbsInstanceBlockDevice;
}
