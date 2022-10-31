package shared



type ActionsEnterprisePermissions struct {
    AllowedActions AllowedActionsEnum `json:"allowed_actions"`
    EnabledOrganizations EnabledOrganizationsEnum `json:"enabled_organizations"`
    SelectedActionsURL *string `json:"selected_actions_url,omitempty"`
    SelectedOrganizationsURL *string `json:"selected_organizations_url,omitempty"`
    
}

