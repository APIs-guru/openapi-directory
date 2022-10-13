package shared

type ProjectFeatureFlags struct {
	BuildForkPrs    *bool `json:"build-fork-prs"`
	Fleet           *bool `json:"fleet"`
	Junit           *bool `json:"junit"`
	Oss             *bool `json:"oss"`
	Osx             *bool `json:"osx"`
	SetGithubStatus *bool `json:"set-github-status"`
	TrustyBeta      *bool `json:"trusty-beta"`
}

type Project struct {
	Aws                  *Aws                   `json:"aws"`
	Branches             map[string]interface{} `json:"branches"`
	CampfireNotifyPrefs  *string                `json:"campfire_notify_prefs"`
	CampfireRoom         *string                `json:"campfire_room"`
	CampfireSubdomain    *string                `json:"campfire_subdomain"`
	CampfireToken        *string                `json:"campfire_token"`
	Compile              *string                `json:"compile"`
	DefaultBranch        *string                `json:"default_branch"`
	Dependencies         *string                `json:"dependencies"`
	Extra                *string                `json:"extra"`
	FeatureFlags         *ProjectFeatureFlags   `json:"feature_flags"`
	FlowdockAPIToken     *string                `json:"flowdock_api_token"`
	Followed             *bool                  `json:"followed"`
	HasUsableKey         *bool                  `json:"has_usable_key"`
	HerokuDeployUser     *string                `json:"heroku_deploy_user"`
	HipchatAPIToken      *string                `json:"hipchat_api_token"`
	HipchatNotify        *string                `json:"hipchat_notify"`
	HipchatNotifyPrefs   *string                `json:"hipchat_notify_prefs"`
	HipchatRoom          *string                `json:"hipchat_room"`
	IrcChannel           *string                `json:"irc_channel"`
	IrcKeyword           *string                `json:"irc_keyword"`
	IrcNotifyPrefs       *string                `json:"irc_notify_prefs"`
	IrcPassword          *string                `json:"irc_password"`
	IrcServer            *string                `json:"irc_server"`
	IrcUsername          *string                `json:"irc_username"`
	Language             *string                `json:"language"`
	Oss                  *bool                  `json:"oss"`
	Parallel             *int64                 `json:"parallel"`
	Reponame             *string                `json:"reponame"`
	Scopes               []ScopeEnum            `json:"scopes"`
	Setup                *string                `json:"setup"`
	SlackAPIToken        *string                `json:"slack_api_token"`
	SlackChannel         *string                `json:"slack_channel"`
	SlackChannelOverride *string                `json:"slack_channel_override"`
	SlackNotifyPrefs     *string                `json:"slack_notify_prefs"`
	SlackSubdomain       *string                `json:"slack_subdomain"`
	SlackWebhookURL      *string                `json:"slack_webhook_url"`
	SSHKeys              []string               `json:"ssh_keys"`
	Test                 *string                `json:"test"`
	Username             *string                `json:"username"`
	VcsType              *string                `json:"vcs_type"`
	VcsURL               *string                `json:"vcs_url"`
}
