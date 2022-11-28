export var StateEnum;
(function (StateEnum) {
    StateEnum["Offline"] = "OFFLINE";
    StateEnum["Online"] = "ONLINE";
    StateEnum["Starting"] = "STARTING";
    StateEnum["Stopping"] = "STOPPING";
    StateEnum["StartFailed"] = "START_FAILED";
    StateEnum["StopFailed"] = "STOP_FAILED";
})(StateEnum || (StateEnum = {}));
