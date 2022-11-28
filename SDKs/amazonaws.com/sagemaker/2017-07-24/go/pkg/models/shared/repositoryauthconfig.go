package shared

// RepositoryAuthConfig
// Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified <code>Vpc</code> as the value for the <code>RepositoryAccessMode</code> field of the <code>ImageConfig</code> object that you passed to a call to <code>CreateModel</code> and the private Docker registry where the model image is hosted requires authentication.
type RepositoryAuthConfig struct {
	RepositoryCredentialsProviderArn string `json:"RepositoryCredentialsProviderArn"`
}
