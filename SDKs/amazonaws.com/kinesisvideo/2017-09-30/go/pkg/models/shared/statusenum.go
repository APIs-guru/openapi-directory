package shared

type StatusEnum string

const (
	StatusEnumCreating StatusEnum = "CREATING"
	StatusEnumActive   StatusEnum = "ACTIVE"
	StatusEnumUpdating StatusEnum = "UPDATING"
	StatusEnumDeleting StatusEnum = "DELETING"
)
