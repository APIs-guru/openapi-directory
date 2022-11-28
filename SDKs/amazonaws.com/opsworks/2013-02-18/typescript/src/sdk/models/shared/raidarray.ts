import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RaidArray
/** 
 * Describes an instance's RAID array.
**/
export class RaidArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=Device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=MountPoint" })
  mountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDisks" })
  numberOfDisks?: number;

  @SpeakeasyMetadata({ data: "json, name=RaidArrayId" })
  raidArrayId?: string;

  @SpeakeasyMetadata({ data: "json, name=RaidLevel" })
  raidLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
