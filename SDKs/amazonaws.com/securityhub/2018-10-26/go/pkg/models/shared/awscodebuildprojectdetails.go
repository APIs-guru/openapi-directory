package shared

type AwsCodeBuildProjectDetails struct {
	EncryptionKey *string                         `json:"EncryptionKey"`
	Environment   *AwsCodeBuildProjectEnvironment `json:"Environment"`
	Name          *string                         `json:"Name"`
	ServiceRole   *string                         `json:"ServiceRole"`
	Source        *AwsCodeBuildProjectSource      `json:"Source"`
	VpcConfig     *AwsCodeBuildProjectVpcConfig   `json:"VpcConfig"`
}
