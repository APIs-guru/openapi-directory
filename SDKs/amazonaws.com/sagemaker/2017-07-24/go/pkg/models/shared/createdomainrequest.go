package shared

type CreateDomainRequest struct {
	AppNetworkAccessType      *AppNetworkAccessTypeEnum `json:"AppNetworkAccessType"`
	AuthMode                  AuthModeEnum              `json:"AuthMode"`
	DefaultUserSettings       UserSettings              `json:"DefaultUserSettings"`
	DomainName                string                    `json:"DomainName"`
	HomeEfsFileSystemKmsKeyID *string                   `json:"HomeEfsFileSystemKmsKeyId"`
	KmsKeyID                  *string                   `json:"KmsKeyId"`
	SubnetIds                 []string                  `json:"SubnetIds"`
	Tags                      []Tag                     `json:"Tags"`
	VpcID                     string                    `json:"VpcId"`
}
