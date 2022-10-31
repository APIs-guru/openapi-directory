package shared




type JobStateEnum string

const (
    JobStateEnumNew JobStateEnum = "New"
JobStateEnumPreparingAppliance JobStateEnum = "PreparingAppliance"
JobStateEnumPreparingShipment JobStateEnum = "PreparingShipment"
JobStateEnumInTransitToCustomer JobStateEnum = "InTransitToCustomer"
JobStateEnumWithCustomer JobStateEnum = "WithCustomer"
JobStateEnumInTransitToAws JobStateEnum = "InTransitToAWS"
JobStateEnumWithAwsSortingFacility JobStateEnum = "WithAWSSortingFacility"
JobStateEnumWithAws JobStateEnum = "WithAWS"
JobStateEnumInProgress JobStateEnum = "InProgress"
JobStateEnumComplete JobStateEnum = "Complete"
JobStateEnumCancelled JobStateEnum = "Cancelled"
JobStateEnumListing JobStateEnum = "Listing"
JobStateEnumPending JobStateEnum = "Pending"
)


