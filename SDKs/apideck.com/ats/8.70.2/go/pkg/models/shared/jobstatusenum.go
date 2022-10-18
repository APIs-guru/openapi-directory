package shared

type JobStatusEnum string

const (
	JobStatusEnumDraft     JobStatusEnum = "draft"
	JobStatusEnumInternal  JobStatusEnum = "internal"
	JobStatusEnumPublished JobStatusEnum = "published"
	JobStatusEnumCompleted JobStatusEnum = "completed"
	JobStatusEnumOnHold    JobStatusEnum = "on-hold"
	JobStatusEnumPrivate   JobStatusEnum = "private"
)
