package shared

type StreamingImage struct {
	Arn                     *string                                `json:"arn,omitempty"`
	Description             *string                                `json:"description,omitempty"`
	Ec2ImageID              *string                                `json:"ec2ImageId,omitempty"`
	EncryptionConfiguration *StreamingImageEncryptionConfiguration `json:"encryptionConfiguration,omitempty"`
	EulaIds                 []string                               `json:"eulaIds,omitempty"`
	Name                    *string                                `json:"name,omitempty"`
	Owner                   *string                                `json:"owner,omitempty"`
	Platform                *string                                `json:"platform,omitempty"`
	State                   *StreamingImageStateEnum               `json:"state,omitempty"`
	StatusCode              *StreamingImageStatusCodeEnum          `json:"statusCode,omitempty"`
	StatusMessage           *string                                `json:"statusMessage,omitempty"`
	StreamingImageID        *string                                `json:"streamingImageId,omitempty"`
	Tags                    map[string]string                      `json:"tags,omitempty"`
}
