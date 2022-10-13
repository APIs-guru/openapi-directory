package shared

type SsmValidationParameters struct {
	Command                 *string         `json:"command"`
	ExecutionTimeoutSeconds *int64          `json:"executionTimeoutSeconds"`
	InstanceID              *string         `json:"instanceId"`
	OutputS3BucketName      *string         `json:"outputS3BucketName"`
	ScriptType              *ScriptTypeEnum `json:"scriptType"`
	Source                  *Source         `json:"source"`
}
