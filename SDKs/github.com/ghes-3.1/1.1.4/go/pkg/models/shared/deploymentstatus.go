package shared

import (
	"time"
)

type DeploymentStatusSimpleUser struct {
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

type DeploymentStatusStateEnum string

const (
	DeploymentStatusStateEnumError      DeploymentStatusStateEnum = "error"
	DeploymentStatusStateEnumFailure    DeploymentStatusStateEnum = "failure"
	DeploymentStatusStateEnumInactive   DeploymentStatusStateEnum = "inactive"
	DeploymentStatusStateEnumPending    DeploymentStatusStateEnum = "pending"
	DeploymentStatusStateEnumSuccess    DeploymentStatusStateEnum = "success"
	DeploymentStatusStateEnumQueued     DeploymentStatusStateEnum = "queued"
	DeploymentStatusStateEnumInProgress DeploymentStatusStateEnum = "in_progress"
)

// DeploymentStatus
// The status of a deployment.
type DeploymentStatus struct {
	CreatedAt             time.Time                  `json:"created_at"`
	Creator               DeploymentStatusSimpleUser `json:"creator"`
	DeploymentURL         string                     `json:"deployment_url"`
	Description           string                     `json:"description"`
	Environment           *string                    `json:"environment,omitempty"`
	EnvironmentURL        *string                    `json:"environment_url,omitempty"`
	ID                    int64                      `json:"id"`
	LogURL                *string                    `json:"log_url,omitempty"`
	NodeID                string                     `json:"node_id"`
	PerformedViaGithubApp map[string]interface{}     `json:"performed_via_github_app,omitempty"`
	RepositoryURL         string                     `json:"repository_url"`
	State                 DeploymentStatusStateEnum  `json:"state"`
	TargetURL             string                     `json:"target_url"`
	UpdatedAt             time.Time                  `json:"updated_at"`
	URL                   string                     `json:"url"`
}
