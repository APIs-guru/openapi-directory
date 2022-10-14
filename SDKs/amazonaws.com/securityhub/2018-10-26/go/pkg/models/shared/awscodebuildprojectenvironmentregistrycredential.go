package shared

type AwsCodeBuildProjectEnvironmentRegistryCredential struct {
	Credential         *string `json:"Credential,omitempty"`
	CredentialProvider *string `json:"CredentialProvider,omitempty"`
}
