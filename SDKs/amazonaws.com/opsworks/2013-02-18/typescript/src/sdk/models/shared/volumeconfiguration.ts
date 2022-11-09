import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VolumeConfiguration
/** 
 * Describes an Amazon EBS volume configuration.
**/
export class VolumeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=MountPoint" })
  mountPoint: string;

  @Metadata({ data: "json, name=NumberOfDisks" })
  numberOfDisks: number;

  @Metadata({ data: "json, name=RaidLevel" })
  raidLevel?: number;

  @Metadata({ data: "json, name=Size" })
  size: number;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
