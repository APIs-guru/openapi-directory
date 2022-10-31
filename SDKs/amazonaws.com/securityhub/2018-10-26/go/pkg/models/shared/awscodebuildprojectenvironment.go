package shared



type AwsCodeBuildProjectEnvironment struct {
    Certificate *string `json:"Certificate,omitempty"`
    ImagePullCredentialsType *string `json:"ImagePullCredentialsType,omitempty"`
    RegistryCredential *AwsCodeBuildProjectEnvironmentRegistryCredential `json:"RegistryCredential,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

