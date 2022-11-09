import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request to query disks replicated.
**/
export declare class DataReplicationInfoReplicatedDisk extends SpeakeasyBase {
    backloggedStorageBytes?: number;
    deviceName?: string;
    replicatedStorageBytes?: number;
    rescannedStorageBytes?: number;
    totalStorageBytes?: number;
}
