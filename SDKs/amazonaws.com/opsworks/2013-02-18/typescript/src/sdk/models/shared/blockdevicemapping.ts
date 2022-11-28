import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsBlockDevice } from "./ebsblockdevice";



// BlockDeviceMapping
/** 
 * Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type. 
**/
export class BlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Ebs" })
  ebs?: EbsBlockDevice;

  @SpeakeasyMetadata({ data: "json, name=NoDevice" })
  noDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=VirtualName" })
  virtualName?: string;
}
