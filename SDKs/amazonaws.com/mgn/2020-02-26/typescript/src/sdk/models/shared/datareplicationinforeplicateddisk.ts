import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataReplicationInfoReplicatedDisk
/** 
 * Request to query disks replicated.
**/
export class DataReplicationInfoReplicatedDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backloggedStorageBytes" })
  backloggedStorageBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=replicatedStorageBytes" })
  replicatedStorageBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=rescannedStorageBytes" })
  rescannedStorageBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=totalStorageBytes" })
  totalStorageBytes?: number;
}
