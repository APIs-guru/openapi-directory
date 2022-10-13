package shared

import (
	"time"
)

type User struct {
	Admin               *bool                  `json:"admin"`
	AllEmails           []string               `json:"all_emails"`
	AnalyticsID         *string                `json:"analytics_id"`
	AvatarURL           *string                `json:"avatar_url"`
	BasicEmailPrefs     *string                `json:"basic_email_prefs"`
	Bitbucket           *int64                 `json:"bitbucket"`
	BitbucketAuthorized *bool                  `json:"bitbucket_authorized"`
	Containers          *int64                 `json:"containers"`
	CreatedAt           *time.Time             `json:"created_at"`
	DaysLeftInTrial     *int64                 `json:"days_left_in_trial"`
	DevAdmin            *bool                  `json:"dev_admin"`
	EnrolledBetas       []string               `json:"enrolled_betas"`
	GithubID            *int64                 `json:"github_id"`
	GithubOauthScopes   []string               `json:"github_oauth_scopes"`
	GravatarID          *int64                 `json:"gravatar_id"`
	HerokuAPIKey        *string                `json:"heroku_api_key"`
	InBetaProgram       *bool                  `json:"in_beta_program"`
	Login               *string                `json:"login"`
	Name                *string                `json:"name"`
	OrganizationPrefs   map[string]interface{} `json:"organization_prefs"`
	Parallelism         *int64                 `json:"parallelism"`
	Plan                *string                `json:"plan"`
	Projects            map[string]interface{} `json:"projects"`
	PusherID            *string                `json:"pusher_id"`
	SelectedEmail       *string                `json:"selected_email"`
	SignInCount         *int64                 `json:"sign_in_count"`
	TrialEnd            *time.Time             `json:"trial_end"`
}
