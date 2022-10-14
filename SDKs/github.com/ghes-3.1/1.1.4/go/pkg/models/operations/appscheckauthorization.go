package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type AppsCheckAuthorizationPathParams struct {
	AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
	ClientID    string `pathParam:"style=simple,explode=false,name=client_id"`
}

type AppsCheckAuthorizationRequest struct {
	PathParams AppsCheckAuthorizationPathParams
}

type AppsCheckAuthorization200ApplicationJSONApp struct {
	ClientID string `json:"client_id"`
	Name     string `json:"name"`
	URL      string `json:"url"`
}

type AppsCheckAuthorization200ApplicationJSONInstallationRepositorySelectionEnum string

const (
	AppsCheckAuthorization200ApplicationJSONInstallationRepositorySelectionEnumAll      AppsCheckAuthorization200ApplicationJSONInstallationRepositorySelectionEnum = "all"
	AppsCheckAuthorization200ApplicationJSONInstallationRepositorySelectionEnumSelected AppsCheckAuthorization200ApplicationJSONInstallationRepositorySelectionEnum = "selected"
)

type AppsCheckAuthorization200ApplicationJSONInstallationScopedInstallation struct {
	Account                shared.SimpleUser                                                           `json:"account"`
	HasMultipleSingleFiles *bool                                                                       `json:"has_multiple_single_files,omitempty"`
	Permissions            shared.AppPermissions                                                       `json:"permissions"`
	RepositoriesURL        string                                                                      `json:"repositories_url"`
	RepositorySelection    AppsCheckAuthorization200ApplicationJSONInstallationRepositorySelectionEnum `json:"repository_selection"`
	SingleFileName         string                                                                      `json:"single_file_name"`
	SingleFilePaths        []string                                                                    `json:"single_file_paths,omitempty"`
}

type AppsCheckAuthorization200ApplicationJSONUserSimpleUser struct {
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

type AppsCheckAuthorization200ApplicationJSONAuthorization struct {
	App            AppsCheckAuthorization200ApplicationJSONApp                             `json:"app"`
	CreatedAt      time.Time                                                               `json:"created_at"`
	Fingerprint    string                                                                  `json:"fingerprint"`
	HashedToken    string                                                                  `json:"hashed_token"`
	ID             int64                                                                   `json:"id"`
	Installation   *AppsCheckAuthorization200ApplicationJSONInstallationScopedInstallation `json:"installation,omitempty"`
	Note           string                                                                  `json:"note"`
	NoteURL        string                                                                  `json:"note_url"`
	Scopes         []string                                                                `json:"scopes"`
	Token          string                                                                  `json:"token"`
	TokenLastEight string                                                                  `json:"token_last_eight"`
	UpdatedAt      time.Time                                                               `json:"updated_at"`
	URL            string                                                                  `json:"url"`
	User           *AppsCheckAuthorization200ApplicationJSONUserSimpleUser                 `json:"user,omitempty"`
}

type AppsCheckAuthorizationResponse struct {
	Authorization *AppsCheckAuthorization200ApplicationJSONAuthorization
	ContentType   string
	StatusCode    int64
	BasicError    *shared.BasicError
}
