package shared

type ProjectFeatureFlags struct {
	BuildForkPrs    *bool `json:"build-fork-prs,omitempty"`
	Fleet           *bool `json:"fleet,omitempty"`
	Junit           *bool `json:"junit,omitempty"`
	Oss             *bool `json:"oss,omitempty"`
	Osx             *bool `json:"osx,omitempty"`
	SetGithubStatus *bool `json:"set-github-status,omitempty"`
	TrustyBeta      *bool `json:"trusty-beta,omitempty"`
}

type Project struct {
	Aws                  *Aws                   `json:"aws,omitempty"`
	Branches             map[string]interface{} `json:"branches,omitempty"`
	CampfireNotifyPrefs  *string                `json:"campfire_notify_prefs,omitempty"`
	CampfireRoom         *string                `json:"campfire_room,omitempty"`
	CampfireSubdomain    *string                `json:"campfire_subdomain,omitempty"`
	CampfireToken        *string                `json:"campfire_token,omitempty"`
	Compile              *string                `json:"compile,omitempty"`
	DefaultBranch        *string                `json:"default_branch,omitempty"`
	Dependencies         *string                `json:"dependencies,omitempty"`
	Extra                *string                `json:"extra,omitempty"`
	FeatureFlags         *ProjectFeatureFlags   `json:"feature_flags,omitempty"`
	FlowdockAPIToken     *string                `json:"flowdock_api_token,omitempty"`
	Followed             *bool                  `json:"followed,omitempty"`
	HasUsableKey         *bool                  `json:"has_usable_key,omitempty"`
	HerokuDeployUser     *string                `json:"heroku_deploy_user,omitempty"`
	HipchatAPIToken      *string                `json:"hipchat_api_token,omitempty"`
	HipchatNotify        *string                `json:"hipchat_notify,omitempty"`
	HipchatNotifyPrefs   *string                `json:"hipchat_notify_prefs,omitempty"`
	HipchatRoom          *string                `json:"hipchat_room,omitempty"`
	IrcChannel           *string                `json:"irc_channel,omitempty"`
	IrcKeyword           *string                `json:"irc_keyword,omitempty"`
	IrcNotifyPrefs       *string                `json:"irc_notify_prefs,omitempty"`
	IrcPassword          *string                `json:"irc_password,omitempty"`
	IrcServer            *string                `json:"irc_server,omitempty"`
	IrcUsername          *string                `json:"irc_username,omitempty"`
	Language             *string                `json:"language,omitempty"`
	Oss                  *bool                  `json:"oss,omitempty"`
	Parallel             *int64                 `json:"parallel,omitempty"`
	Reponame             *string                `json:"reponame,omitempty"`
	Scopes               []ScopeEnum            `json:"scopes,omitempty"`
	Setup                *string                `json:"setup,omitempty"`
	SlackAPIToken        *string                `json:"slack_api_token,omitempty"`
	SlackChannel         *string                `json:"slack_channel,omitempty"`
	SlackChannelOverride *string                `json:"slack_channel_override,omitempty"`
	SlackNotifyPrefs     *string                `json:"slack_notify_prefs,omitempty"`
	SlackSubdomain       *string                `json:"slack_subdomain,omitempty"`
	SlackWebhookURL      *string                `json:"slack_webhook_url,omitempty"`
	SSHKeys              []string               `json:"ssh_keys,omitempty"`
	Test                 *string                `json:"test,omitempty"`
	Username             *string                `json:"username,omitempty"`
	VcsType              *string                `json:"vcs_type,omitempty"`
	VcsURL               *string                `json:"vcs_url,omitempty"`
}
