package shared

type OrganizationSimple struct {
	AvatarURL        string `json:"avatar_url"`
	Description      string `json:"description"`
	EventsURL        string `json:"events_url"`
	HooksURL         string `json:"hooks_url"`
	ID               int64  `json:"id"`
	IssuesURL        string `json:"issues_url"`
	Login            string `json:"login"`
	MembersURL       string `json:"members_url"`
	NodeID           string `json:"node_id"`
	PublicMembersURL string `json:"public_members_url"`
	ReposURL         string `json:"repos_url"`
	URL              string `json:"url"`
}
