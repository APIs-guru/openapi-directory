export var JobStatusEnum;
(function (JobStatusEnum) {
    JobStatusEnum["Running"] = "RUNNING";
    JobStatusEnum["Paused"] = "PAUSED";
    JobStatusEnum["Cancelled"] = "CANCELLED";
    JobStatusEnum["Complete"] = "COMPLETE";
    JobStatusEnum["Idle"] = "IDLE";
    JobStatusEnum["UserPaused"] = "USER_PAUSED";
})(JobStatusEnum || (JobStatusEnum = {}));
