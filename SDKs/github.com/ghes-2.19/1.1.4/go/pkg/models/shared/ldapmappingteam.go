package shared

type LdapMappingTeam struct {
	Description     *string      `json:"description"`
	HTMLURL         *string      `json:"html_url"`
	ID              *int64       `json:"id"`
	LdapDn          *string      `json:"ldap_dn"`
	MembersURL      *string      `json:"members_url"`
	Name            *string      `json:"name"`
	NodeID          *string      `json:"node_id"`
	Parent          *interface{} `json:"parent"`
	Permission      *string      `json:"permission"`
	Privacy         *string      `json:"privacy"`
	RepositoriesURL *string      `json:"repositories_url"`
	Slug            *string      `json:"slug"`
	URL             *string      `json:"url"`
}
