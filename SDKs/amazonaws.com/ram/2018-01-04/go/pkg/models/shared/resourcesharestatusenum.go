package shared

type ResourceShareStatusEnum string

const (
	ResourceShareStatusEnumPending  ResourceShareStatusEnum = "PENDING"
	ResourceShareStatusEnumActive   ResourceShareStatusEnum = "ACTIVE"
	ResourceShareStatusEnumFailed   ResourceShareStatusEnum = "FAILED"
	ResourceShareStatusEnumDeleting ResourceShareStatusEnum = "DELETING"
	ResourceShareStatusEnumDeleted  ResourceShareStatusEnum = "DELETED"
)
