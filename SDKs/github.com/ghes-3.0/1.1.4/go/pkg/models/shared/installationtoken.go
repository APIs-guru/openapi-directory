package shared

type InstallationTokenPermissions struct {
	Contents   *string `json:"contents"`
	Issues     *string `json:"issues"`
	Metadata   *string `json:"metadata"`
	SingleFile *string `json:"single_file"`
}

type InstallationTokenRepositorySelectionEnum string

const (
	InstallationTokenRepositorySelectionEnumAll      InstallationTokenRepositorySelectionEnum = "all"
	InstallationTokenRepositorySelectionEnumSelected InstallationTokenRepositorySelectionEnum = "selected"
)

type InstallationToken struct {
	ExpiresAt              string                                    `json:"expires_at"`
	HasMultipleSingleFiles *bool                                     `json:"has_multiple_single_files"`
	Permissions            *InstallationTokenPermissions             `json:"permissions"`
	Repositories           []Repository                              `json:"repositories"`
	RepositorySelection    *InstallationTokenRepositorySelectionEnum `json:"repository_selection"`
	SingleFile             *string                                   `json:"single_file"`
	SingleFilePaths        []string                                  `json:"single_file_paths"`
	Token                  string                                    `json:"token"`
}
