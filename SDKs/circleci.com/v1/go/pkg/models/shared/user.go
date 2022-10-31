package shared

import (
	"time"
)

type User struct {
	Admin               *bool                  `json:"admin,omitempty"`
	AllEmails           []string               `json:"all_emails,omitempty"`
	AnalyticsID         *string                `json:"analytics_id,omitempty"`
	AvatarURL           *string                `json:"avatar_url,omitempty"`
	BasicEmailPrefs     *string                `json:"basic_email_prefs,omitempty"`
	Bitbucket           *int64                 `json:"bitbucket,omitempty"`
	BitbucketAuthorized *bool                  `json:"bitbucket_authorized,omitempty"`
	Containers          *int64                 `json:"containers,omitempty"`
	CreatedAt           *time.Time             `json:"created_at,omitempty"`
	DaysLeftInTrial     *int64                 `json:"days_left_in_trial,omitempty"`
	DevAdmin            *bool                  `json:"dev_admin,omitempty"`
	EnrolledBetas       []string               `json:"enrolled_betas,omitempty"`
	GithubID            *int64                 `json:"github_id,omitempty"`
	GithubOauthScopes   []string               `json:"github_oauth_scopes,omitempty"`
	GravatarID          *int64                 `json:"gravatar_id,omitempty"`
	HerokuAPIKey        *string                `json:"heroku_api_key,omitempty"`
	InBetaProgram       *bool                  `json:"in_beta_program,omitempty"`
	Login               *string                `json:"login,omitempty"`
	Name                *string                `json:"name,omitempty"`
	OrganizationPrefs   map[string]interface{} `json:"organization_prefs,omitempty"`
	Parallelism         *int64                 `json:"parallelism,omitempty"`
	Plan                *string                `json:"plan,omitempty"`
	Projects            map[string]interface{} `json:"projects,omitempty"`
	PusherID            *string                `json:"pusher_id,omitempty"`
	SelectedEmail       *string                `json:"selected_email,omitempty"`
	SignInCount         *int64                 `json:"sign_in_count,omitempty"`
	TrialEnd            *time.Time             `json:"trial_end,omitempty"`
}
