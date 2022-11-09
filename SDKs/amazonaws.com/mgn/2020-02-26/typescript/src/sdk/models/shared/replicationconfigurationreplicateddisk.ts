import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum } from "./replicationconfigurationreplicateddiskstagingdisktypeenum";


// ReplicationConfigurationReplicatedDisk
/** 
 * Replication Configuration replicated disk.
**/
export class ReplicationConfigurationReplicatedDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=iops" })
  iops?: number;

  @Metadata({ data: "json, name=isBootDisk" })
  isBootDisk?: boolean;

  @Metadata({ data: "json, name=stagingDiskType" })
  stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
}
