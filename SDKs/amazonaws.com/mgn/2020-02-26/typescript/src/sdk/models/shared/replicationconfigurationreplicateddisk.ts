import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum } from "./replicationconfigurationreplicateddiskstagingdisktypeenum";



// ReplicationConfigurationReplicatedDisk
/** 
 * Replication Configuration replicated disk.
**/
export class ReplicationConfigurationReplicatedDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=isBootDisk" })
  isBootDisk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stagingDiskType" })
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
}
