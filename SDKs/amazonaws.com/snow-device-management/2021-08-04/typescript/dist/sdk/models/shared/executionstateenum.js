export var ExecutionStateEnum;
(function (ExecutionStateEnum) {
    ExecutionStateEnum["Queued"] = "QUEUED";
    ExecutionStateEnum["InProgress"] = "IN_PROGRESS";
    ExecutionStateEnum["Canceled"] = "CANCELED";
    ExecutionStateEnum["Failed"] = "FAILED";
    ExecutionStateEnum["Succeeded"] = "SUCCEEDED";
    ExecutionStateEnum["Rejected"] = "REJECTED";
    ExecutionStateEnum["TimedOut"] = "TIMED_OUT";
})(ExecutionStateEnum || (ExecutionStateEnum = {}));
