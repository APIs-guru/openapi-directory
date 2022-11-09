import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataReplicationInfoReplicatedDisk
/** 
 * Request to query disks replicated.
**/
export class DataReplicationInfoReplicatedDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=backloggedStorageBytes" })
  backloggedStorageBytes?: number;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=replicatedStorageBytes" })
  replicatedStorageBytes?: number;

  @Metadata({ data: "json, name=rescannedStorageBytes" })
  rescannedStorageBytes?: number;

  @Metadata({ data: "json, name=totalStorageBytes" })
  totalStorageBytes?: number;
}
