export var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Created"] = "CREATED";
    JobStatusEnum["PreparingForInitialization"] = "PREPARING_FOR_INITIALIZATION";
    JobStatusEnum["Initializing"] = "INITIALIZING";
    JobStatusEnum["Processing"] = "PROCESSING";
    JobStatusEnum["PendingJob"] = "PENDING_JOB";
    JobStatusEnum["Completing"] = "COMPLETING";
    JobStatusEnum["Completed"] = "COMPLETED";
    JobStatusEnum["Failing"] = "FAILING";
    JobStatusEnum["Failed"] = "FAILED";
})(JobStatusEnum || (JobStatusEnum = {}));
