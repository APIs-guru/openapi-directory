package shared

type RunnerGroupsEnterprise struct {
	AllowsPublicRepositories bool    `json:"allows_public_repositories"`
	Default                  bool    `json:"default"`
	ID                       float64 `json:"id"`
	Name                     string  `json:"name"`
	RunnersURL               string  `json:"runners_url"`
	SelectedOrganizationsURL *string `json:"selected_organizations_url,omitempty"`
	Visibility               string  `json:"visibility"`
}
