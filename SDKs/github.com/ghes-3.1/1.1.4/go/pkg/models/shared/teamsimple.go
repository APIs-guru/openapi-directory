package shared

// TeamSimple
// Groups of organization members that gives permissions on specified repositories.
type TeamSimple struct {
	Description     string  `json:"description"`
	HTMLURL         string  `json:"html_url"`
	ID              int64   `json:"id"`
	LdapDn          *string `json:"ldap_dn,omitempty"`
	MembersURL      string  `json:"members_url"`
	Name            string  `json:"name"`
	NodeID          string  `json:"node_id"`
	Permission      string  `json:"permission"`
	Privacy         *string `json:"privacy,omitempty"`
	RepositoriesURL string  `json:"repositories_url"`
	Slug            string  `json:"slug"`
	URL             string  `json:"url"`
}
