package shared

type RunnerGroupsOrg struct {
	AllowsPublicRepositories          bool    `json:"allows_public_repositories"`
	Default                           bool    `json:"default"`
	ID                                float64 `json:"id"`
	Inherited                         bool    `json:"inherited"`
	InheritedAllowsPublicRepositories *bool   `json:"inherited_allows_public_repositories"`
	Name                              string  `json:"name"`
	RunnersURL                        string  `json:"runners_url"`
	SelectedRepositoriesURL           *string `json:"selected_repositories_url"`
	Visibility                        string  `json:"visibility"`
}
