


export enum ServiceStatusEnum {
    CreateInProgress = "CREATE_IN_PROGRESS",
    CreateFailedCleanupInProgress = "CREATE_FAILED_CLEANUP_IN_PROGRESS",
    CreateFailedCleanupComplete = "CREATE_FAILED_CLEANUP_COMPLETE",
    CreateFailedCleanupFailed = "CREATE_FAILED_CLEANUP_FAILED",
    CreateFailed = "CREATE_FAILED",
    Active = "ACTIVE",
    DeleteInProgress = "DELETE_IN_PROGRESS",
    DeleteFailed = "DELETE_FAILED",
    UpdateInProgress = "UPDATE_IN_PROGRESS",
    UpdateFailedCleanupInProgress = "UPDATE_FAILED_CLEANUP_IN_PROGRESS",
    UpdateFailedCleanupComplete = "UPDATE_FAILED_CLEANUP_COMPLETE",
    UpdateFailedCleanupFailed = "UPDATE_FAILED_CLEANUP_FAILED",
    UpdateFailed = "UPDATE_FAILED",
    UpdateCompleteCleanupFailed = "UPDATE_COMPLETE_CLEANUP_FAILED"
}
