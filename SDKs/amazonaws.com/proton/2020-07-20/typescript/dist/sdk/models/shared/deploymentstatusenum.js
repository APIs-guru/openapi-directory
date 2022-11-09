export var DeploymentStatusEnum;
(function (DeploymentStatusEnum) {
    DeploymentStatusEnum["InProgress"] = "IN_PROGRESS";
    DeploymentStatusEnum["Failed"] = "FAILED";
    DeploymentStatusEnum["Succeeded"] = "SUCCEEDED";
    DeploymentStatusEnum["DeleteInProgress"] = "DELETE_IN_PROGRESS";
    DeploymentStatusEnum["DeleteFailed"] = "DELETE_FAILED";
    DeploymentStatusEnum["DeleteComplete"] = "DELETE_COMPLETE";
    DeploymentStatusEnum["Cancelling"] = "CANCELLING";
    DeploymentStatusEnum["Cancelled"] = "CANCELLED";
})(DeploymentStatusEnum || (DeploymentStatusEnum = {}));
