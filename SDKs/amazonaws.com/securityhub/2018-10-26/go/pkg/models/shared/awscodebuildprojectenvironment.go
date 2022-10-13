package shared

type AwsCodeBuildProjectEnvironment struct {
	Certificate              *string                                           `json:"Certificate"`
	ImagePullCredentialsType *string                                           `json:"ImagePullCredentialsType"`
	RegistryCredential       *AwsCodeBuildProjectEnvironmentRegistryCredential `json:"RegistryCredential"`
	Type                     *string                                           `json:"Type"`
}
