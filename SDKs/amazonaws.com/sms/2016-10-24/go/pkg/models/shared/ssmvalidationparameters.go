package shared

type SsmValidationParameters struct {
	Command                 *string         `json:"command,omitempty"`
	ExecutionTimeoutSeconds *int64          `json:"executionTimeoutSeconds,omitempty"`
	InstanceID              *string         `json:"instanceId,omitempty"`
	OutputS3BucketName      *string         `json:"outputS3BucketName,omitempty"`
	ScriptType              *ScriptTypeEnum `json:"scriptType,omitempty"`
	Source                  *Source         `json:"source,omitempty"`
}
