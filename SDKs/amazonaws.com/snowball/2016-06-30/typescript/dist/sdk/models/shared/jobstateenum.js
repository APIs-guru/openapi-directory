export var JobStateEnum;
(function (JobStateEnum) {
    JobStateEnum["New"] = "New";
    JobStateEnum["PreparingAppliance"] = "PreparingAppliance";
    JobStateEnum["PreparingShipment"] = "PreparingShipment";
    JobStateEnum["InTransitToCustomer"] = "InTransitToCustomer";
    JobStateEnum["WithCustomer"] = "WithCustomer";
    JobStateEnum["InTransitToAws"] = "InTransitToAWS";
    JobStateEnum["WithAwsSortingFacility"] = "WithAWSSortingFacility";
    JobStateEnum["WithAws"] = "WithAWS";
    JobStateEnum["InProgress"] = "InProgress";
    JobStateEnum["Complete"] = "Complete";
    JobStateEnum["Cancelled"] = "Cancelled";
    JobStateEnum["Listing"] = "Listing";
    JobStateEnum["Pending"] = "Pending";
})(JobStateEnum || (JobStateEnum = {}));
