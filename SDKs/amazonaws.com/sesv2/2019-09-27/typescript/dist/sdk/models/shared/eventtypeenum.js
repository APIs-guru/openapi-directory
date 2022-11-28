export var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["Send"] = "SEND";
    EventTypeEnum["Reject"] = "REJECT";
    EventTypeEnum["Bounce"] = "BOUNCE";
    EventTypeEnum["Complaint"] = "COMPLAINT";
    EventTypeEnum["Delivery"] = "DELIVERY";
    EventTypeEnum["Open"] = "OPEN";
    EventTypeEnum["Click"] = "CLICK";
    EventTypeEnum["RenderingFailure"] = "RENDERING_FAILURE";
    EventTypeEnum["DeliveryDelay"] = "DELIVERY_DELAY";
    EventTypeEnum["Subscription"] = "SUBSCRIPTION";
})(EventTypeEnum || (EventTypeEnum = {}));
