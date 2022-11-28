import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SyncJobEntity
/** 
 * List Sync Jobs
**/
export class SyncJobEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folder_behavior_id" })
  folderBehaviorId?: number;

  @SpeakeasyMetadata({ data: "json, name=queued_at" })
  queuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=regional_worker_status" })
  regionalWorkerStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}
