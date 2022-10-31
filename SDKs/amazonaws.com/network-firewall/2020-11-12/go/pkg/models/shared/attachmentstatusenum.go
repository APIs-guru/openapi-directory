package shared

type AttachmentStatusEnum string

const (
	AttachmentStatusEnumCreating AttachmentStatusEnum = "CREATING"
	AttachmentStatusEnumDeleting AttachmentStatusEnum = "DELETING"
	AttachmentStatusEnumScaling  AttachmentStatusEnum = "SCALING"
	AttachmentStatusEnumReady    AttachmentStatusEnum = "READY"
)
