package shared




type InstanceHealthStateEnum string

const (
    InstanceHealthStateEnumInitial InstanceHealthStateEnum = "initial"
InstanceHealthStateEnumHealthy InstanceHealthStateEnum = "healthy"
InstanceHealthStateEnumUnhealthy InstanceHealthStateEnum = "unhealthy"
InstanceHealthStateEnumUnused InstanceHealthStateEnum = "unused"
InstanceHealthStateEnumDraining InstanceHealthStateEnum = "draining"
InstanceHealthStateEnumUnavailable InstanceHealthStateEnum = "unavailable"
)


