package shared

type CreateDomainRequest struct {
	AppNetworkAccessType      *AppNetworkAccessTypeEnum `json:"AppNetworkAccessType,omitempty"`
	AuthMode                  AuthModeEnum              `json:"AuthMode"`
	DefaultUserSettings       UserSettings              `json:"DefaultUserSettings"`
	DomainName                string                    `json:"DomainName"`
	HomeEfsFileSystemKmsKeyID *string                   `json:"HomeEfsFileSystemKmsKeyId,omitempty"`
	KmsKeyID                  *string                   `json:"KmsKeyId,omitempty"`
	SubnetIds                 []string                  `json:"SubnetIds"`
	Tags                      []Tag                     `json:"Tags,omitempty"`
	VpcID                     string                    `json:"VpcId"`
}
