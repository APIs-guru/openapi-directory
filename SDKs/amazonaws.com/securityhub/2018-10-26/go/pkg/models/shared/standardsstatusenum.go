package shared

type StandardsStatusEnum string

const (
	StandardsStatusEnumPending    StandardsStatusEnum = "PENDING"
	StandardsStatusEnumReady      StandardsStatusEnum = "READY"
	StandardsStatusEnumFailed     StandardsStatusEnum = "FAILED"
	StandardsStatusEnumDeleting   StandardsStatusEnum = "DELETING"
	StandardsStatusEnumIncomplete StandardsStatusEnum = "INCOMPLETE"
)
