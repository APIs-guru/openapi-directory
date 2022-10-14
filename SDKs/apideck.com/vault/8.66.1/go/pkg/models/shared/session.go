package shared

type SessionSettings struct {
	AutoRedirect         *bool              `json:"auto_redirect,omitempty"`
	HideResourceSettings *bool              `json:"hide_resource_settings,omitempty"`
	IsolationMode        *bool              `json:"isolation_mode,omitempty"`
	SandboxMode          *bool              `json:"sandbox_mode,omitempty"`
	SessionLength        *string            `json:"session_length,omitempty"`
	ShowLogs             *bool              `json:"show_logs,omitempty"`
	ShowSuggestions      *bool              `json:"show_suggestions,omitempty"`
	UnifiedApis          []UnifiedAPIIDEnum `json:"unified_apis,omitempty"`
}

type SessionTheme struct {
	Favicon                  *string `json:"favicon,omitempty"`
	PrimaryColor             *string `json:"primary_color,omitempty"`
	PrivacyURL               *string `json:"privacy_url,omitempty"`
	SidepanelBackgroundColor *string `json:"sidepanel_background_color,omitempty"`
	SidepanelTextColor       *string `json:"sidepanel_text_color,omitempty"`
	TermsURL                 *string `json:"terms_url,omitempty"`
	VaultName                *string `json:"vault_name,omitempty"`
}

type Session struct {
	ConsumerMetadata       *ConsumerMetadata      `json:"consumer_metadata,omitempty"`
	CustomConsumerSettings map[string]interface{} `json:"custom_consumer_settings,omitempty"`
	RedirectURI            *string                `json:"redirect_uri,omitempty"`
	Settings               *SessionSettings       `json:"settings,omitempty"`
	Theme                  *SessionTheme          `json:"theme,omitempty"`
}
