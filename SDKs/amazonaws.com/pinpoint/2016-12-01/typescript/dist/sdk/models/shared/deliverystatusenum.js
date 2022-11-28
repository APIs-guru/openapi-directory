export var DeliveryStatusEnum;
(function (DeliveryStatusEnum) {
    DeliveryStatusEnum["Successful"] = "SUCCESSFUL";
    DeliveryStatusEnum["Throttled"] = "THROTTLED";
    DeliveryStatusEnum["TemporaryFailure"] = "TEMPORARY_FAILURE";
    DeliveryStatusEnum["PermanentFailure"] = "PERMANENT_FAILURE";
    DeliveryStatusEnum["UnknownFailure"] = "UNKNOWN_FAILURE";
    DeliveryStatusEnum["OptOut"] = "OPT_OUT";
    DeliveryStatusEnum["Duplicate"] = "DUPLICATE";
})(DeliveryStatusEnum || (DeliveryStatusEnum = {}));
