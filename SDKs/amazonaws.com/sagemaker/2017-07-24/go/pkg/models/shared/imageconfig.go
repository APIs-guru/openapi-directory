package shared

// ImageConfig
// Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
type ImageConfig struct {
	RepositoryAccessMode RepositoryAccessModeEnum `json:"RepositoryAccessMode"`
	RepositoryAuthConfig *RepositoryAuthConfig    `json:"RepositoryAuthConfig,omitempty"`
}
