export var CommandStatusEnum;
(function (CommandStatusEnum) {
    CommandStatusEnum["Pending"] = "Pending";
    CommandStatusEnum["InProgress"] = "InProgress";
    CommandStatusEnum["Success"] = "Success";
    CommandStatusEnum["Cancelled"] = "Cancelled";
    CommandStatusEnum["Failed"] = "Failed";
    CommandStatusEnum["TimedOut"] = "TimedOut";
    CommandStatusEnum["Cancelling"] = "Cancelling";
})(CommandStatusEnum || (CommandStatusEnum = {}));
