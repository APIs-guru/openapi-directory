package shared

type CreateLogGroupRequest struct {
	KmsKeyID     *string           `json:"kmsKeyId"`
	LogGroupName string            `json:"logGroupName"`
	Tags         map[string]string `json:"tags"`
}
