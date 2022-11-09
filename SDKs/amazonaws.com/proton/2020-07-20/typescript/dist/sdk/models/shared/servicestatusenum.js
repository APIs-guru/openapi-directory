export var ServiceStatusEnum;
(function (ServiceStatusEnum) {
    ServiceStatusEnum["CreateInProgress"] = "CREATE_IN_PROGRESS";
    ServiceStatusEnum["CreateFailedCleanupInProgress"] = "CREATE_FAILED_CLEANUP_IN_PROGRESS";
    ServiceStatusEnum["CreateFailedCleanupComplete"] = "CREATE_FAILED_CLEANUP_COMPLETE";
    ServiceStatusEnum["CreateFailedCleanupFailed"] = "CREATE_FAILED_CLEANUP_FAILED";
    ServiceStatusEnum["CreateFailed"] = "CREATE_FAILED";
    ServiceStatusEnum["Active"] = "ACTIVE";
    ServiceStatusEnum["DeleteInProgress"] = "DELETE_IN_PROGRESS";
    ServiceStatusEnum["DeleteFailed"] = "DELETE_FAILED";
    ServiceStatusEnum["UpdateInProgress"] = "UPDATE_IN_PROGRESS";
    ServiceStatusEnum["UpdateFailedCleanupInProgress"] = "UPDATE_FAILED_CLEANUP_IN_PROGRESS";
    ServiceStatusEnum["UpdateFailedCleanupComplete"] = "UPDATE_FAILED_CLEANUP_COMPLETE";
    ServiceStatusEnum["UpdateFailedCleanupFailed"] = "UPDATE_FAILED_CLEANUP_FAILED";
    ServiceStatusEnum["UpdateFailed"] = "UPDATE_FAILED";
    ServiceStatusEnum["UpdateCompleteCleanupFailed"] = "UPDATE_COMPLETE_CLEANUP_FAILED";
})(ServiceStatusEnum || (ServiceStatusEnum = {}));
