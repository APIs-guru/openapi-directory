package shared

type WorkspaceResponse struct {
	EmailDomains   []string `json:"email_domains"`
	Gid            *string  `json:"gid"`
	IsOrganization *bool    `json:"is_organization"`
	Name           *string  `json:"name"`
	ResourceType   *string  `json:"resource_type"`
}
