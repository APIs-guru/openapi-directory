export var GrantStatusEnum;
(function (GrantStatusEnum) {
    GrantStatusEnum["PendingWorkflow"] = "PENDING_WORKFLOW";
    GrantStatusEnum["PendingAccept"] = "PENDING_ACCEPT";
    GrantStatusEnum["Rejected"] = "REJECTED";
    GrantStatusEnum["Active"] = "ACTIVE";
    GrantStatusEnum["FailedWorkflow"] = "FAILED_WORKFLOW";
    GrantStatusEnum["Deleted"] = "DELETED";
    GrantStatusEnum["PendingDelete"] = "PENDING_DELETE";
    GrantStatusEnum["Disabled"] = "DISABLED";
    GrantStatusEnum["WorkflowCompleted"] = "WORKFLOW_COMPLETED";
})(GrantStatusEnum || (GrantStatusEnum = {}));
