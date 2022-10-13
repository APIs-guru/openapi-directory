package shared

type BranchRestrictionPolicyAppsOwner struct {
	AvatarURL         *string `json:"avatar_url"`
	Description       *string `json:"description"`
	EventsURL         *string `json:"events_url"`
	FollowersURL      *string `json:"followers_url"`
	FollowingURL      *string `json:"following_url"`
	GistsURL          *string `json:"gists_url"`
	GravatarID        *string `json:"gravatar_id"`
	HooksURL          *string `json:"hooks_url"`
	HTMLURL           *string `json:"html_url"`
	ID                *int64  `json:"id"`
	IssuesURL         *string `json:"issues_url"`
	Login             *string `json:"login"`
	MembersURL        *string `json:"members_url"`
	NodeID            *string `json:"node_id"`
	OrganizationsURL  *string `json:"organizations_url"`
	PublicMembersURL  *string `json:"public_members_url"`
	ReceivedEventsURL *string `json:"received_events_url"`
	ReposURL          *string `json:"repos_url"`
	StarredURL        *string `json:"starred_url"`
	SubscriptionsURL  *string `json:"subscriptions_url"`
	Type              *string `json:"type"`
	URL               *string `json:"url"`
}

type BranchRestrictionPolicyAppsPermissions struct {
	Contents   *string `json:"contents"`
	Issues     *string `json:"issues"`
	Metadata   *string `json:"metadata"`
	SingleFile *string `json:"single_file"`
}

type BranchRestrictionPolicyApps struct {
	CreatedAt   *string                                 `json:"created_at"`
	Description *string                                 `json:"description"`
	Events      []string                                `json:"events"`
	ExternalURL *string                                 `json:"external_url"`
	HTMLURL     *string                                 `json:"html_url"`
	ID          *int64                                  `json:"id"`
	Name        *string                                 `json:"name"`
	NodeID      *string                                 `json:"node_id"`
	Owner       *BranchRestrictionPolicyAppsOwner       `json:"owner"`
	Permissions *BranchRestrictionPolicyAppsPermissions `json:"permissions"`
	Slug        *string                                 `json:"slug"`
	UpdatedAt   *string                                 `json:"updated_at"`
}

type BranchRestrictionPolicyTeams struct {
	Description     *string `json:"description"`
	HTMLURL         *string `json:"html_url"`
	ID              *int64  `json:"id"`
	MembersURL      *string `json:"members_url"`
	Name            *string `json:"name"`
	NodeID          *string `json:"node_id"`
	Parent          *string `json:"parent"`
	Permission      *string `json:"permission"`
	Privacy         *string `json:"privacy"`
	RepositoriesURL *string `json:"repositories_url"`
	Slug            *string `json:"slug"`
	URL             *string `json:"url"`
}

type BranchRestrictionPolicyUsers struct {
	AvatarURL         *string `json:"avatar_url"`
	EventsURL         *string `json:"events_url"`
	FollowersURL      *string `json:"followers_url"`
	FollowingURL      *string `json:"following_url"`
	GistsURL          *string `json:"gists_url"`
	GravatarID        *string `json:"gravatar_id"`
	HTMLURL           *string `json:"html_url"`
	ID                *int64  `json:"id"`
	Login             *string `json:"login"`
	NodeID            *string `json:"node_id"`
	OrganizationsURL  *string `json:"organizations_url"`
	ReceivedEventsURL *string `json:"received_events_url"`
	ReposURL          *string `json:"repos_url"`
	SiteAdmin         *bool   `json:"site_admin"`
	StarredURL        *string `json:"starred_url"`
	SubscriptionsURL  *string `json:"subscriptions_url"`
	Type              *string `json:"type"`
	URL               *string `json:"url"`
}

type BranchRestrictionPolicy struct {
	Apps     []BranchRestrictionPolicyApps  `json:"apps"`
	AppsURL  string                         `json:"apps_url"`
	Teams    []BranchRestrictionPolicyTeams `json:"teams"`
	TeamsURL string                         `json:"teams_url"`
	URL      string                         `json:"url"`
	Users    []BranchRestrictionPolicyUsers `json:"users"`
	UsersURL string                         `json:"users_url"`
}
