import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RaidArray
/** 
 * Describes an instance's RAID array.
**/
export class RaidArray extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=Device" })
  device?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=MountPoint" })
  mountPoint?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NumberOfDisks" })
  numberOfDisks?: number;

  @Metadata({ data: "json, name=RaidArrayId" })
  raidArrayId?: string;

  @Metadata({ data: "json, name=RaidLevel" })
  raidLevel?: number;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
