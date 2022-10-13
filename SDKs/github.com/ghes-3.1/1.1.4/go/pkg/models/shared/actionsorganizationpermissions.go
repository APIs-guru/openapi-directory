package shared

type ActionsOrganizationPermissions struct {
	AllowedActions          *AllowedActionsEnum     `json:"allowed_actions"`
	EnabledRepositories     EnabledRepositoriesEnum `json:"enabled_repositories"`
	SelectedActionsURL      *string                 `json:"selected_actions_url"`
	SelectedRepositoriesURL *string                 `json:"selected_repositories_url"`
}
