import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Volume
/** 
 * Describes an instance's Amazon EBS volume.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=Device" })
  device?: string;

  @Metadata({ data: "json, name=Ec2VolumeId" })
  ec2VolumeId?: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=MountPoint" })
  mountPoint?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RaidArrayId" })
  raidArrayId?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId?: string;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
