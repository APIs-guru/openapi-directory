package shared

type WebAppDisplayModeEnum string

const (
	WebAppDisplayModeEnumDisplayModeUnspecified WebAppDisplayModeEnum = "displayModeUnspecified"
	WebAppDisplayModeEnumMinimalUI              WebAppDisplayModeEnum = "minimalUi"
	WebAppDisplayModeEnumStandalone             WebAppDisplayModeEnum = "standalone"
	WebAppDisplayModeEnumFullScreen             WebAppDisplayModeEnum = "fullScreen"
)

type WebApp struct {
	DisplayMode *WebAppDisplayModeEnum `json:"displayMode,omitempty"`
	Icons       []WebAppIcon           `json:"icons,omitempty"`
	IsPublished *bool                  `json:"isPublished,omitempty"`
	StartURL    *string                `json:"startUrl,omitempty"`
	Title       *string                `json:"title,omitempty"`
	VersionCode *string                `json:"versionCode,omitempty"`
	WebAppID    *string                `json:"webAppId,omitempty"`
}
