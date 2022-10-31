package shared




type WebAppDisplayModeEnum string

const (
    WebAppDisplayModeEnumDisplayModeUnspecified WebAppDisplayModeEnum = "DISPLAY_MODE_UNSPECIFIED"
WebAppDisplayModeEnumMinimalUI WebAppDisplayModeEnum = "MINIMAL_UI"
WebAppDisplayModeEnumStandalone WebAppDisplayModeEnum = "STANDALONE"
WebAppDisplayModeEnumFullScreen WebAppDisplayModeEnum = "FULL_SCREEN"
)


type WebApp struct {
    DisplayMode *WebAppDisplayModeEnum `json:"displayMode,omitempty"`
    Icons []WebAppIcon `json:"icons,omitempty"`
    Name *string `json:"name,omitempty"`
    StartURL *string `json:"startUrl,omitempty"`
    Title *string `json:"title,omitempty"`
    VersionCode *string `json:"versionCode,omitempty"`
    
}

