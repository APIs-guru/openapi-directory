package shared

type ServiceUpdateStatusEnum string

const (
	ServiceUpdateStatusEnumAvailable  ServiceUpdateStatusEnum = "available"
	ServiceUpdateStatusEnumInProgress ServiceUpdateStatusEnum = "in-progress"
	ServiceUpdateStatusEnumComplete   ServiceUpdateStatusEnum = "complete"
	ServiceUpdateStatusEnumScheduled  ServiceUpdateStatusEnum = "scheduled"
)
