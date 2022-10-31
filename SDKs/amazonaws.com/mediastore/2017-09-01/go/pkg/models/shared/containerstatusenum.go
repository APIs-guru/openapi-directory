package shared

type ContainerStatusEnum string

const (
	ContainerStatusEnumActive   ContainerStatusEnum = "ACTIVE"
	ContainerStatusEnumCreating ContainerStatusEnum = "CREATING"
	ContainerStatusEnumDeleting ContainerStatusEnum = "DELETING"
)
