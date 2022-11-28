export var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Retried"] = "retried";
    StatusEnum["Canceled"] = "canceled";
    StatusEnum["InfrastructureFail"] = "infrastructure_fail";
    StatusEnum["Timedout"] = "timedout";
    StatusEnum["NotRun"] = "not_run";
    StatusEnum["Running"] = "running";
    StatusEnum["Failed"] = "failed";
    StatusEnum["Queued"] = "queued";
    StatusEnum["Scheduled"] = "scheduled";
    StatusEnum["NotRunning"] = "not_running";
    StatusEnum["NoTests"] = "no_tests";
    StatusEnum["Fixed"] = "fixed";
    StatusEnum["Success"] = "success";
})(StatusEnum || (StatusEnum = {}));
