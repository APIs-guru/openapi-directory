package shared

import (
	"time"
)

type ProjectSimpleUser struct {
	AvatarURL         string  `json:"avatar_url"`
	EventsURL         string  `json:"events_url"`
	FollowersURL      string  `json:"followers_url"`
	FollowingURL      string  `json:"following_url"`
	GistsURL          string  `json:"gists_url"`
	GravatarID        string  `json:"gravatar_id"`
	HTMLURL           string  `json:"html_url"`
	ID                int64   `json:"id"`
	Login             string  `json:"login"`
	NodeID            string  `json:"node_id"`
	OrganizationsURL  string  `json:"organizations_url"`
	ReceivedEventsURL string  `json:"received_events_url"`
	ReposURL          string  `json:"repos_url"`
	SiteAdmin         bool    `json:"site_admin"`
	StarredAt         *string `json:"starred_at,omitempty"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type ProjectOrganizationPermissionEnum string

const (
	ProjectOrganizationPermissionEnumRead  ProjectOrganizationPermissionEnum = "read"
	ProjectOrganizationPermissionEnumWrite ProjectOrganizationPermissionEnum = "write"
	ProjectOrganizationPermissionEnumAdmin ProjectOrganizationPermissionEnum = "admin"
	ProjectOrganizationPermissionEnumNone  ProjectOrganizationPermissionEnum = "none"
)

// Project
// Projects are a way to organize columns and cards of work.
type Project struct {
	Body                   string                             `json:"body"`
	ColumnsURL             string                             `json:"columns_url"`
	CreatedAt              time.Time                          `json:"created_at"`
	Creator                ProjectSimpleUser                  `json:"creator"`
	HTMLURL                string                             `json:"html_url"`
	ID                     int64                              `json:"id"`
	Name                   string                             `json:"name"`
	NodeID                 string                             `json:"node_id"`
	Number                 int64                              `json:"number"`
	OrganizationPermission *ProjectOrganizationPermissionEnum `json:"organization_permission,omitempty"`
	OwnerURL               string                             `json:"owner_url"`
	Private                *bool                              `json:"private,omitempty"`
	State                  string                             `json:"state"`
	UpdatedAt              time.Time                          `json:"updated_at"`
	URL                    string                             `json:"url"`
}
