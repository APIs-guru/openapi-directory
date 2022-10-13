package shared

type StreamingImage struct {
	Arn                     *string                                `json:"arn"`
	Description             *string                                `json:"description"`
	Ec2ImageID              *string                                `json:"ec2ImageId"`
	EncryptionConfiguration *StreamingImageEncryptionConfiguration `json:"encryptionConfiguration"`
	EulaIds                 []string                               `json:"eulaIds"`
	Name                    *string                                `json:"name"`
	Owner                   *string                                `json:"owner"`
	Platform                *string                                `json:"platform"`
	State                   *StreamingImageStateEnum               `json:"state"`
	StatusCode              *StreamingImageStatusCodeEnum          `json:"statusCode"`
	StatusMessage           *string                                `json:"statusMessage"`
	StreamingImageID        *string                                `json:"streamingImageId"`
	Tags                    map[string]string                      `json:"tags"`
}
