package shared

type StatusEnum string

const (
	StatusEnumAvailable StatusEnum = "AVAILABLE"
	StatusEnumCreating  StatusEnum = "CREATING"
	StatusEnumFailed    StatusEnum = "FAILED"
)
