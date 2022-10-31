package shared

type ProcessingS3UploadModeEnum string

const (
	ProcessingS3UploadModeEnumContinuous ProcessingS3UploadModeEnum = "Continuous"
	ProcessingS3UploadModeEnumEndOfJob   ProcessingS3UploadModeEnum = "EndOfJob"
)
