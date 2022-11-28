package shared

// AwsCodeBuildProjectEnvironmentRegistryCredential
// The credentials for access to a private registry.
type AwsCodeBuildProjectEnvironmentRegistryCredential struct {
	Credential         *string `json:"Credential,omitempty"`
	CredentialProvider *string `json:"CredentialProvider,omitempty"`
}
