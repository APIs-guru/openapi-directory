package shared

type UploadBehaviorEnum string

const (
	UploadBehaviorEnumUploadOnTerminate       UploadBehaviorEnum = "UPLOAD_ON_TERMINATE"
	UploadBehaviorEnumUploadRollingAutoRemove UploadBehaviorEnum = "UPLOAD_ROLLING_AUTO_REMOVE"
)
