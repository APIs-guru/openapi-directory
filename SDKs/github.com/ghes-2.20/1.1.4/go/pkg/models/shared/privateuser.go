package shared

import (
	"time"
)

type PrivateUserPlan struct {
	Collaborators int64  `json:"collaborators"`
	Name          string `json:"name"`
	PrivateRepos  int64  `json:"private_repos"`
	Space         int64  `json:"space"`
}

type PrivateUser struct {
	AvatarURL               string           `json:"avatar_url"`
	Bio                     string           `json:"bio"`
	Blog                    string           `json:"blog"`
	BusinessPlus            *bool            `json:"business_plus,omitempty"`
	Collaborators           int64            `json:"collaborators"`
	Company                 string           `json:"company"`
	CreatedAt               time.Time        `json:"created_at"`
	DiskUsage               int64            `json:"disk_usage"`
	Email                   string           `json:"email"`
	EventsURL               string           `json:"events_url"`
	Followers               int64            `json:"followers"`
	FollowersURL            string           `json:"followers_url"`
	Following               int64            `json:"following"`
	FollowingURL            string           `json:"following_url"`
	GistsURL                string           `json:"gists_url"`
	GravatarID              string           `json:"gravatar_id"`
	Hireable                bool             `json:"hireable"`
	HTMLURL                 string           `json:"html_url"`
	ID                      int64            `json:"id"`
	LdapDn                  *string          `json:"ldap_dn,omitempty"`
	Location                string           `json:"location"`
	Login                   string           `json:"login"`
	Name                    string           `json:"name"`
	NodeID                  string           `json:"node_id"`
	OrganizationsURL        string           `json:"organizations_url"`
	OwnedPrivateRepos       int64            `json:"owned_private_repos"`
	Plan                    *PrivateUserPlan `json:"plan,omitempty"`
	PrivateGists            int64            `json:"private_gists"`
	PublicGists             int64            `json:"public_gists"`
	PublicRepos             int64            `json:"public_repos"`
	ReceivedEventsURL       string           `json:"received_events_url"`
	ReposURL                string           `json:"repos_url"`
	SiteAdmin               bool             `json:"site_admin"`
	StarredURL              string           `json:"starred_url"`
	SubscriptionsURL        string           `json:"subscriptions_url"`
	SuspendedAt             *time.Time       `json:"suspended_at,omitempty"`
	TotalPrivateRepos       int64            `json:"total_private_repos"`
	TwoFactorAuthentication bool             `json:"two_factor_authentication"`
	Type                    string           `json:"type"`
	UpdatedAt               time.Time        `json:"updated_at"`
	URL                     string           `json:"url"`
}
