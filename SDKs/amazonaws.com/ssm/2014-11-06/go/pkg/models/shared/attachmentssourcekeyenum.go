package shared

type AttachmentsSourceKeyEnum string

const (
	AttachmentsSourceKeyEnumSourceURL           AttachmentsSourceKeyEnum = "SourceUrl"
	AttachmentsSourceKeyEnumS3FileURL           AttachmentsSourceKeyEnum = "S3FileUrl"
	AttachmentsSourceKeyEnumAttachmentReference AttachmentsSourceKeyEnum = "AttachmentReference"
)
