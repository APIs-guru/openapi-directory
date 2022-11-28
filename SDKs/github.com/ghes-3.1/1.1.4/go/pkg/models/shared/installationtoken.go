package shared

type InstallationTokenPermissions struct {
	Contents   *string `json:"contents,omitempty"`
	Issues     *string `json:"issues,omitempty"`
	Metadata   *string `json:"metadata,omitempty"`
	SingleFile *string `json:"single_file,omitempty"`
}

type InstallationTokenRepositorySelectionEnum string

const (
	InstallationTokenRepositorySelectionEnumAll      InstallationTokenRepositorySelectionEnum = "all"
	InstallationTokenRepositorySelectionEnumSelected InstallationTokenRepositorySelectionEnum = "selected"
)

// InstallationToken
// Authentication token for a GitHub App installed on a user or org.
type InstallationToken struct {
	ExpiresAt              string                                    `json:"expires_at"`
	HasMultipleSingleFiles *bool                                     `json:"has_multiple_single_files,omitempty"`
	Permissions            *InstallationTokenPermissions             `json:"permissions,omitempty"`
	Repositories           []Repository                              `json:"repositories,omitempty"`
	RepositorySelection    *InstallationTokenRepositorySelectionEnum `json:"repository_selection,omitempty"`
	SingleFile             *string                                   `json:"single_file,omitempty"`
	SingleFilePaths        []string                                  `json:"single_file_paths,omitempty"`
	Token                  string                                    `json:"token"`
}
