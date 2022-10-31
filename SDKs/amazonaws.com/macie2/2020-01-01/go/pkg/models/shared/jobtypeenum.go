package shared

type JobTypeEnum string

const (
	JobTypeEnumOneTime   JobTypeEnum = "ONE_TIME"
	JobTypeEnumScheduled JobTypeEnum = "SCHEDULED"
)
