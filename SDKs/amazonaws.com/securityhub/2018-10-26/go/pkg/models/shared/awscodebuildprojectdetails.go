package shared

// AwsCodeBuildProjectDetails
// Information about an CodeBuild project.
type AwsCodeBuildProjectDetails struct {
	EncryptionKey *string                         `json:"EncryptionKey,omitempty"`
	Environment   *AwsCodeBuildProjectEnvironment `json:"Environment,omitempty"`
	Name          *string                         `json:"Name,omitempty"`
	ServiceRole   *string                         `json:"ServiceRole,omitempty"`
	Source        *AwsCodeBuildProjectSource      `json:"Source,omitempty"`
	VpcConfig     *AwsCodeBuildProjectVpcConfig   `json:"VpcConfig,omitempty"`
}
