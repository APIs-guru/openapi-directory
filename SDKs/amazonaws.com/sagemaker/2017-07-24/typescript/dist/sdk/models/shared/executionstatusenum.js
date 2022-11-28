export var ExecutionStatusEnum;
(function (ExecutionStatusEnum) {
    ExecutionStatusEnum["Pending"] = "Pending";
    ExecutionStatusEnum["Completed"] = "Completed";
    ExecutionStatusEnum["CompletedWithViolations"] = "CompletedWithViolations";
    ExecutionStatusEnum["InProgress"] = "InProgress";
    ExecutionStatusEnum["Failed"] = "Failed";
    ExecutionStatusEnum["Stopping"] = "Stopping";
    ExecutionStatusEnum["Stopped"] = "Stopped";
})(ExecutionStatusEnum || (ExecutionStatusEnum = {}));
