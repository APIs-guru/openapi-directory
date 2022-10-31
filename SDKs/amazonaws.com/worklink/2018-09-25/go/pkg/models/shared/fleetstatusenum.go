package shared




type FleetStatusEnum string

const (
    FleetStatusEnumCreating FleetStatusEnum = "CREATING"
FleetStatusEnumActive FleetStatusEnum = "ACTIVE"
FleetStatusEnumDeleting FleetStatusEnum = "DELETING"
FleetStatusEnumDeleted FleetStatusEnum = "DELETED"
FleetStatusEnumFailedToCreate FleetStatusEnum = "FAILED_TO_CREATE"
FleetStatusEnumFailedToDelete FleetStatusEnum = "FAILED_TO_DELETE"
)


