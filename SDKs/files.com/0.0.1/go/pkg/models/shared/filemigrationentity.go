package shared




type FileMigrationEntityOperationEnum string

const (
    FileMigrationEntityOperationEnumDelete FileMigrationEntityOperationEnum = "delete"
FileMigrationEntityOperationEnumMove FileMigrationEntityOperationEnum = "move"
FileMigrationEntityOperationEnumCopy FileMigrationEntityOperationEnum = "copy"
)



type FileMigrationEntityStatusEnum string

const (
    FileMigrationEntityStatusEnumPending FileMigrationEntityStatusEnum = "pending"
FileMigrationEntityStatusEnumCounting FileMigrationEntityStatusEnum = "counting"
FileMigrationEntityStatusEnumProcessing FileMigrationEntityStatusEnum = "processing"
FileMigrationEntityStatusEnumComplete FileMigrationEntityStatusEnum = "complete"
FileMigrationEntityStatusEnumProcessingSubfolders FileMigrationEntityStatusEnum = "processing_subfolders"
FileMigrationEntityStatusEnumFinishing FileMigrationEntityStatusEnum = "finishing"
FileMigrationEntityStatusEnumCreatingDestFolder FileMigrationEntityStatusEnum = "creating_dest_folder"
FileMigrationEntityStatusEnumWaitingForOtherJobs FileMigrationEntityStatusEnum = "waiting_for_other_jobs"
FileMigrationEntityStatusEnumWaitingForAllFiles FileMigrationEntityStatusEnum = "waiting_for_all_files"
FileMigrationEntityStatusEnumWaitingForPendingSubfolders FileMigrationEntityStatusEnum = "waiting_for_pending_subfolders"
FileMigrationEntityStatusEnumWaitingForAllSubfolders FileMigrationEntityStatusEnum = "waiting_for_all_subfolders"
FileMigrationEntityStatusEnumFailed FileMigrationEntityStatusEnum = "failed"
FileMigrationEntityStatusEnumWaitingForEnqueuedOperations FileMigrationEntityStatusEnum = "waiting_for_enqueued_operations"
FileMigrationEntityStatusEnumProcessingDeferredFolders FileMigrationEntityStatusEnum = "processing_deferred_folders"
FileMigrationEntityStatusEnumProcessingRecursively FileMigrationEntityStatusEnum = "processing_recursively"
FileMigrationEntityStatusEnumRemovingDeferredFolders FileMigrationEntityStatusEnum = "removing_deferred_folders"
)


type FileMigrationEntity struct {
    DestPath *string `json:"dest_path,omitempty"`
    FilesMoved *int32 `json:"files_moved,omitempty"`
    FilesTotal *int32 `json:"files_total,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LogURL *string `json:"log_url,omitempty"`
    Operation *FileMigrationEntityOperationEnum `json:"operation,omitempty"`
    Path *string `json:"path,omitempty"`
    Region *string `json:"region,omitempty"`
    Status *FileMigrationEntityStatusEnum `json:"status,omitempty"`
    
}

