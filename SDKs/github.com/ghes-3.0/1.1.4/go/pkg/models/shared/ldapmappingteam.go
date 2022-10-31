package shared

type LdapMappingTeam struct {
	Description     *string      `json:"description,omitempty"`
	HTMLURL         *string      `json:"html_url,omitempty"`
	ID              *int64       `json:"id,omitempty"`
	LdapDn          *string      `json:"ldap_dn,omitempty"`
	MembersURL      *string      `json:"members_url,omitempty"`
	Name            *string      `json:"name,omitempty"`
	NodeID          *string      `json:"node_id,omitempty"`
	Parent          *interface{} `json:"parent,omitempty"`
	Permission      *string      `json:"permission,omitempty"`
	Privacy         *string      `json:"privacy,omitempty"`
	RepositoriesURL *string      `json:"repositories_url,omitempty"`
	Slug            *string      `json:"slug,omitempty"`
	URL             *string      `json:"url,omitempty"`
}
