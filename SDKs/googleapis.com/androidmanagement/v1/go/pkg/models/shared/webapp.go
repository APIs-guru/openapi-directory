package shared

type WebAppDisplayModeEnum string

const (
	WebAppDisplayModeEnumDisplayModeUnspecified WebAppDisplayModeEnum = "DISPLAY_MODE_UNSPECIFIED"
	WebAppDisplayModeEnumMinimalUI              WebAppDisplayModeEnum = "MINIMAL_UI"
	WebAppDisplayModeEnumStandalone             WebAppDisplayModeEnum = "STANDALONE"
	WebAppDisplayModeEnumFullScreen             WebAppDisplayModeEnum = "FULL_SCREEN"
)

type WebApp struct {
	DisplayMode *WebAppDisplayModeEnum `json:"displayMode"`
	Icons       []WebAppIcon           `json:"icons"`
	Name        *string                `json:"name"`
	StartURL    *string                `json:"startUrl"`
	Title       *string                `json:"title"`
	VersionCode *string                `json:"versionCode"`
}
