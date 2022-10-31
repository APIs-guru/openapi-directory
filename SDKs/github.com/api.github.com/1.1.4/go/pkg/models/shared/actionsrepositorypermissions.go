package shared



type ActionsRepositoryPermissions struct {
    AllowedActions AllowedActionsEnum `json:"allowed_actions"`
    Enabled bool `json:"enabled"`
    SelectedActionsURL *string `json:"selected_actions_url,omitempty"`
    
}

