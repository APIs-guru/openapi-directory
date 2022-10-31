package shared

type CreateLogGroupRequest struct {
	KmsKeyID     *string           `json:"kmsKeyId,omitempty"`
	LogGroupName string            `json:"logGroupName"`
	Tags         map[string]string `json:"tags,omitempty"`
}
