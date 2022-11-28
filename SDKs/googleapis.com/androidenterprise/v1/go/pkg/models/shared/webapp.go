package shared

type WebAppDisplayModeEnum string

const (
	WebAppDisplayModeEnumDisplayModeUnspecified WebAppDisplayModeEnum = "displayModeUnspecified"
	WebAppDisplayModeEnumMinimalUI              WebAppDisplayModeEnum = "minimalUi"
	WebAppDisplayModeEnumStandalone             WebAppDisplayModeEnum = "standalone"
	WebAppDisplayModeEnumFullScreen             WebAppDisplayModeEnum = "fullScreen"
)

// WebApp
// A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.
type WebApp struct {
	DisplayMode *WebAppDisplayModeEnum `json:"displayMode,omitempty"`
	Icons       []WebAppIcon           `json:"icons,omitempty"`
	IsPublished *bool                  `json:"isPublished,omitempty"`
	StartURL    *string                `json:"startUrl,omitempty"`
	Title       *string                `json:"title,omitempty"`
	VersionCode *string                `json:"versionCode,omitempty"`
	WebAppID    *string                `json:"webAppId,omitempty"`
}
