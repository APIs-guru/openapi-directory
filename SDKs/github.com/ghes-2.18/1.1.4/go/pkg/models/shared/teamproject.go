package shared

type TeamProjectPermissions struct {
	Admin bool `json:"admin"`
	Read  bool `json:"read"`
	Write bool `json:"write"`
}

// TeamProject
// A team's access to a project.
type TeamProject struct {
	Body                   string                 `json:"body"`
	ColumnsURL             string                 `json:"columns_url"`
	CreatedAt              string                 `json:"created_at"`
	Creator                SimpleUser             `json:"creator"`
	HTMLURL                string                 `json:"html_url"`
	ID                     int64                  `json:"id"`
	Name                   string                 `json:"name"`
	NodeID                 string                 `json:"node_id"`
	Number                 int64                  `json:"number"`
	OrganizationPermission *string                `json:"organization_permission,omitempty"`
	OwnerURL               string                 `json:"owner_url"`
	Permissions            TeamProjectPermissions `json:"permissions"`
	Private                *bool                  `json:"private,omitempty"`
	State                  string                 `json:"state"`
	UpdatedAt              string                 `json:"updated_at"`
	URL                    string                 `json:"url"`
}
