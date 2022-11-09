import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsInstanceBlockDevice } from "./ebsinstanceblockdevice";


// InstanceBlockDeviceMapping
/** 
 * The description of a block device mapping.
**/
export class InstanceBlockDeviceMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=ebs" })
  ebs?: EbsInstanceBlockDevice;
}
