package shared

type WebAppDisplayModeEnum string

const (
	WebAppDisplayModeEnumDisplayModeUnspecified WebAppDisplayModeEnum = "displayModeUnspecified"
	WebAppDisplayModeEnumMinimalUI              WebAppDisplayModeEnum = "minimalUi"
	WebAppDisplayModeEnumStandalone             WebAppDisplayModeEnum = "standalone"
	WebAppDisplayModeEnumFullScreen             WebAppDisplayModeEnum = "fullScreen"
)

type WebApp struct {
	DisplayMode *WebAppDisplayModeEnum `json:"displayMode"`
	Icons       []WebAppIcon           `json:"icons"`
	IsPublished *bool                  `json:"isPublished"`
	StartURL    *string                `json:"startUrl"`
	Title       *string                `json:"title"`
	VersionCode *string                `json:"versionCode"`
	WebAppID    *string                `json:"webAppId"`
}
