import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum } from "./replicationconfigurationreplicateddiskstagingdisktypeenum";
/**
 * Replication Configuration replicated disk.
**/
export declare class ReplicationConfigurationReplicatedDisk extends SpeakeasyBase {
    deviceName?: string;
    iops?: number;
    isBootDisk?: boolean;
    stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskTypeEnum;
}
