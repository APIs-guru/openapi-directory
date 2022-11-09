export var ApplicationStatusEnum;
(function (ApplicationStatusEnum) {
    ApplicationStatusEnum["Deleting"] = "DELETING";
    ApplicationStatusEnum["Starting"] = "STARTING";
    ApplicationStatusEnum["Stopping"] = "STOPPING";
    ApplicationStatusEnum["Ready"] = "READY";
    ApplicationStatusEnum["Running"] = "RUNNING";
    ApplicationStatusEnum["Updating"] = "UPDATING";
    ApplicationStatusEnum["Autoscaling"] = "AUTOSCALING";
    ApplicationStatusEnum["ForceStopping"] = "FORCE_STOPPING";
    ApplicationStatusEnum["Maintenance"] = "MAINTENANCE";
    ApplicationStatusEnum["RollingBack"] = "ROLLING_BACK";
    ApplicationStatusEnum["RolledBack"] = "ROLLED_BACK";
})(ApplicationStatusEnum || (ApplicationStatusEnum = {}));
