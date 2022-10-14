package shared

type ImageConfig struct {
	RepositoryAccessMode RepositoryAccessModeEnum `json:"RepositoryAccessMode"`
	RepositoryAuthConfig *RepositoryAuthConfig    `json:"RepositoryAuthConfig,omitempty"`
}
