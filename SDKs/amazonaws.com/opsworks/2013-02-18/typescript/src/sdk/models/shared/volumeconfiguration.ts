import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeConfiguration
/** 
 * Describes an Amazon EBS volume configuration.
**/
export class VolumeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=MountPoint" })
  mountPoint: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDisks" })
  numberOfDisks: number;

  @SpeakeasyMetadata({ data: "json, name=RaidLevel" })
  raidLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
