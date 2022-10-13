package shared

type StackInstanceStatusEnum string

const (
	StackInstanceStatusEnumCurrent    StackInstanceStatusEnum = "CURRENT"
	StackInstanceStatusEnumOutdated   StackInstanceStatusEnum = "OUTDATED"
	StackInstanceStatusEnumInoperable StackInstanceStatusEnum = "INOPERABLE"
)
