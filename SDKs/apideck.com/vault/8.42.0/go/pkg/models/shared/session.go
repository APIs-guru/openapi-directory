package shared

type SessionSettings struct {
	AutoRedirect         *bool              `json:"auto_redirect"`
	HideResourceSettings *bool              `json:"hide_resource_settings"`
	IsolationMode        *bool              `json:"isolation_mode"`
	SandboxMode          *bool              `json:"sandbox_mode"`
	SessionLength        *string            `json:"session_length"`
	ShowLogs             *bool              `json:"show_logs"`
	ShowSuggestions      *bool              `json:"show_suggestions"`
	UnifiedApis          []UnifiedAPIIDEnum `json:"unified_apis"`
}

type SessionTheme struct {
	Favicon                  *string `json:"favicon"`
	PrimaryColor             *string `json:"primary_color"`
	PrivacyURL               *string `json:"privacy_url"`
	SidepanelBackgroundColor *string `json:"sidepanel_background_color"`
	SidepanelTextColor       *string `json:"sidepanel_text_color"`
	TermsURL                 *string `json:"terms_url"`
	VaultName                *string `json:"vault_name"`
}

type Session struct {
	ConsumerMetadata       *ConsumerMetadata      `json:"consumer_metadata"`
	CustomConsumerSettings map[string]interface{} `json:"custom_consumer_settings"`
	RedirectURI            *string                `json:"redirect_uri"`
	Settings               *SessionSettings       `json:"settings"`
	Theme                  *SessionTheme          `json:"theme"`
}
