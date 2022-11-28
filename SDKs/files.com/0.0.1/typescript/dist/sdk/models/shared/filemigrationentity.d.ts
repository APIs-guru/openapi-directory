import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileMigrationEntityOperationEnum {
    Delete = "delete",
    Move = "move",
    Copy = "copy"
}
export declare enum FileMigrationEntityStatusEnum {
    Pending = "pending",
    Counting = "counting",
    Processing = "processing",
    Complete = "complete",
    ProcessingSubfolders = "processing_subfolders",
    Finishing = "finishing",
    CreatingDestFolder = "creating_dest_folder",
    WaitingForOtherJobs = "waiting_for_other_jobs",
    WaitingForAllFiles = "waiting_for_all_files",
    WaitingForPendingSubfolders = "waiting_for_pending_subfolders",
    WaitingForAllSubfolders = "waiting_for_all_subfolders",
    Failed = "failed",
    WaitingForEnqueuedOperations = "waiting_for_enqueued_operations",
    ProcessingDeferredFolders = "processing_deferred_folders",
    ProcessingRecursively = "processing_recursively",
    RemovingDeferredFolders = "removing_deferred_folders"
}
/**
 * Show File Migration
**/
export declare class FileMigrationEntity extends SpeakeasyBase {
    destPath?: string;
    filesMoved?: number;
    filesTotal?: number;
    id?: number;
    logUrl?: string;
    operation?: FileMigrationEntityOperationEnum;
    path?: string;
    region?: string;
    status?: FileMigrationEntityStatusEnum;
}
