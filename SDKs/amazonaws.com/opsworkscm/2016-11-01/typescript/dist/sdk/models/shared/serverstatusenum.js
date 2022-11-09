export var ServerStatusEnum;
(function (ServerStatusEnum) {
    ServerStatusEnum["BackingUp"] = "BACKING_UP";
    ServerStatusEnum["ConnectionLost"] = "CONNECTION_LOST";
    ServerStatusEnum["Creating"] = "CREATING";
    ServerStatusEnum["Deleting"] = "DELETING";
    ServerStatusEnum["Modifying"] = "MODIFYING";
    ServerStatusEnum["Failed"] = "FAILED";
    ServerStatusEnum["Healthy"] = "HEALTHY";
    ServerStatusEnum["Running"] = "RUNNING";
    ServerStatusEnum["Restoring"] = "RESTORING";
    ServerStatusEnum["Setup"] = "SETUP";
    ServerStatusEnum["UnderMaintenance"] = "UNDER_MAINTENANCE";
    ServerStatusEnum["Unhealthy"] = "UNHEALTHY";
    ServerStatusEnum["Terminated"] = "TERMINATED";
})(ServerStatusEnum || (ServerStatusEnum = {}));
