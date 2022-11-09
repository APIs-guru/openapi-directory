import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SyncJobEntity
/** 
 * List Sync Jobs
**/
export class SyncJobEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=folder_behavior_id" })
  folderBehaviorId?: number;

  @Metadata({ data: "json, name=queued_at" })
  queuedAt?: Date;

  @Metadata({ data: "json, name=regional_worker_status" })
  regionalWorkerStatus?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
