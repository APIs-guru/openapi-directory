package shared

type UploadStatusEnum string

const (
	UploadStatusEnumInProgress UploadStatusEnum = "IN_PROGRESS"
	UploadStatusEnumSucceeded  UploadStatusEnum = "SUCCEEDED"
	UploadStatusEnumFailed     UploadStatusEnum = "FAILED"
)
