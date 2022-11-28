package shared

type BranchRestrictionPolicyAppsOwner struct {
	AvatarURL         *string `json:"avatar_url,omitempty"`
	Description       *string `json:"description,omitempty"`
	EventsURL         *string `json:"events_url,omitempty"`
	FollowersURL      *string `json:"followers_url,omitempty"`
	FollowingURL      *string `json:"following_url,omitempty"`
	GistsURL          *string `json:"gists_url,omitempty"`
	GravatarID        *string `json:"gravatar_id,omitempty"`
	HooksURL          *string `json:"hooks_url,omitempty"`
	HTMLURL           *string `json:"html_url,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	IssuesURL         *string `json:"issues_url,omitempty"`
	Login             *string `json:"login,omitempty"`
	MembersURL        *string `json:"members_url,omitempty"`
	NodeID            *string `json:"node_id,omitempty"`
	OrganizationsURL  *string `json:"organizations_url,omitempty"`
	PublicMembersURL  *string `json:"public_members_url,omitempty"`
	ReceivedEventsURL *string `json:"received_events_url,omitempty"`
	ReposURL          *string `json:"repos_url,omitempty"`
	StarredURL        *string `json:"starred_url,omitempty"`
	SubscriptionsURL  *string `json:"subscriptions_url,omitempty"`
	Type              *string `json:"type,omitempty"`
	URL               *string `json:"url,omitempty"`
}

type BranchRestrictionPolicyAppsPermissions struct {
	Contents   *string `json:"contents,omitempty"`
	Issues     *string `json:"issues,omitempty"`
	Metadata   *string `json:"metadata,omitempty"`
	SingleFile *string `json:"single_file,omitempty"`
}

type BranchRestrictionPolicyApps struct {
	CreatedAt   *string                                 `json:"created_at,omitempty"`
	Description *string                                 `json:"description,omitempty"`
	Events      []string                                `json:"events,omitempty"`
	ExternalURL *string                                 `json:"external_url,omitempty"`
	HTMLURL     *string                                 `json:"html_url,omitempty"`
	ID          *int64                                  `json:"id,omitempty"`
	Name        *string                                 `json:"name,omitempty"`
	NodeID      *string                                 `json:"node_id,omitempty"`
	Owner       *BranchRestrictionPolicyAppsOwner       `json:"owner,omitempty"`
	Permissions *BranchRestrictionPolicyAppsPermissions `json:"permissions,omitempty"`
	Slug        *string                                 `json:"slug,omitempty"`
	UpdatedAt   *string                                 `json:"updated_at,omitempty"`
}

type BranchRestrictionPolicyRestrictionsTeams struct {
	Description     *string      `json:"description,omitempty"`
	HTMLURL         *string      `json:"html_url,omitempty"`
	ID              *float64     `json:"id,omitempty"`
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

type BranchRestrictionPolicyRestrictionsUsers struct {
	AvatarURL         *string  `json:"avatar_url,omitempty"`
	EventsURL         *string  `json:"events_url,omitempty"`
	FollowersURL      *string  `json:"followers_url,omitempty"`
	FollowingURL      *string  `json:"following_url,omitempty"`
	GistsURL          *string  `json:"gists_url,omitempty"`
	GravatarID        *string  `json:"gravatar_id,omitempty"`
	HTMLURL           *string  `json:"html_url,omitempty"`
	ID                *float64 `json:"id,omitempty"`
	Login             *string  `json:"login,omitempty"`
	NodeID            *string  `json:"node_id,omitempty"`
	OrganizationsURL  *string  `json:"organizations_url,omitempty"`
	ReceivedEventsURL *string  `json:"received_events_url,omitempty"`
	ReposURL          *string  `json:"repos_url,omitempty"`
	SiteAdmin         *bool    `json:"site_admin,omitempty"`
	StarredURL        *string  `json:"starred_url,omitempty"`
	SubscriptionsURL  *string  `json:"subscriptions_url,omitempty"`
	Type              *string  `json:"type,omitempty"`
	URL               *string  `json:"url,omitempty"`
}

type BranchRestrictionPolicyRestrictions struct {
	Teams    []BranchRestrictionPolicyRestrictionsTeams `json:"teams,omitempty"`
	TeamsURL *string                                    `json:"teams_url,omitempty"`
	URL      *string                                    `json:"url,omitempty"`
	Users    []BranchRestrictionPolicyRestrictionsUsers `json:"users,omitempty"`
	UsersURL *string                                    `json:"users_url,omitempty"`
}

type BranchRestrictionPolicyTeams struct {
	Description     *string `json:"description,omitempty"`
	HTMLURL         *string `json:"html_url,omitempty"`
	ID              *int64  `json:"id,omitempty"`
	MembersURL      *string `json:"members_url,omitempty"`
	Name            *string `json:"name,omitempty"`
	NodeID          *string `json:"node_id,omitempty"`
	Parent          *string `json:"parent,omitempty"`
	Permission      *string `json:"permission,omitempty"`
	Privacy         *string `json:"privacy,omitempty"`
	RepositoriesURL *string `json:"repositories_url,omitempty"`
	Slug            *string `json:"slug,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type BranchRestrictionPolicyUsers struct {
	AvatarURL         *string `json:"avatar_url,omitempty"`
	EventsURL         *string `json:"events_url,omitempty"`
	FollowersURL      *string `json:"followers_url,omitempty"`
	FollowingURL      *string `json:"following_url,omitempty"`
	GistsURL          *string `json:"gists_url,omitempty"`
	GravatarID        *string `json:"gravatar_id,omitempty"`
	HTMLURL           *string `json:"html_url,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	Login             *string `json:"login,omitempty"`
	NodeID            *string `json:"node_id,omitempty"`
	OrganizationsURL  *string `json:"organizations_url,omitempty"`
	ReceivedEventsURL *string `json:"received_events_url,omitempty"`
	ReposURL          *string `json:"repos_url,omitempty"`
	SiteAdmin         *bool   `json:"site_admin,omitempty"`
	StarredURL        *string `json:"starred_url,omitempty"`
	SubscriptionsURL  *string `json:"subscriptions_url,omitempty"`
	Type              *string `json:"type,omitempty"`
	URL               *string `json:"url,omitempty"`
}

// BranchRestrictionPolicy
// Branch Restriction Policy
type BranchRestrictionPolicy struct {
	Apps         []BranchRestrictionPolicyApps         `json:"apps"`
	AppsURL      string                                `json:"apps_url"`
	Restrictions []BranchRestrictionPolicyRestrictions `json:"restrictions,omitempty"`
	Teams        []BranchRestrictionPolicyTeams        `json:"teams"`
	TeamsURL     string                                `json:"teams_url"`
	URL          string                                `json:"url"`
	Users        []BranchRestrictionPolicyUsers        `json:"users"`
	UsersURL     string                                `json:"users_url"`
}
