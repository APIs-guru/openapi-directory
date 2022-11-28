import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Volume
/** 
 * Describes an instance's Amazon EBS volume.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=Device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2VolumeId" })
  ec2VolumeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=MountPoint" })
  mountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RaidArrayId" })
  raidArrayId?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
