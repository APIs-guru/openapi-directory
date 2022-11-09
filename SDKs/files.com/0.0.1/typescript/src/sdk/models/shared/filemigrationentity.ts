import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileMigrationEntityOperationEnum {
    Delete = "delete"
,    Move = "move"
,    Copy = "copy"
}

export enum FileMigrationEntityStatusEnum {
    Pending = "pending"
,    Counting = "counting"
,    Processing = "processing"
,    Complete = "complete"
,    ProcessingSubfolders = "processing_subfolders"
,    Finishing = "finishing"
,    CreatingDestFolder = "creating_dest_folder"
,    WaitingForOtherJobs = "waiting_for_other_jobs"
,    WaitingForAllFiles = "waiting_for_all_files"
,    WaitingForPendingSubfolders = "waiting_for_pending_subfolders"
,    WaitingForAllSubfolders = "waiting_for_all_subfolders"
,    Failed = "failed"
,    WaitingForEnqueuedOperations = "waiting_for_enqueued_operations"
,    ProcessingDeferredFolders = "processing_deferred_folders"
,    ProcessingRecursively = "processing_recursively"
,    RemovingDeferredFolders = "removing_deferred_folders"
}


// FileMigrationEntity
/** 
 * Show File Migration
**/
export class FileMigrationEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=dest_path" })
  destPath?: string;

  @Metadata({ data: "json, name=files_moved" })
  filesMoved?: number;

  @Metadata({ data: "json, name=files_total" })
  filesTotal?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=log_url" })
  logUrl?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: FileMigrationEntityOperationEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=status" })
  status?: FileMigrationEntityStatusEnum;
}
