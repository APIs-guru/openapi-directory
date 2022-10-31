package shared

type Playerinput struct {
	BackgroundBottom *string `json:"backgroundBottom,omitempty"`
	BackgroundText   *string `json:"backgroundText,omitempty"`
	BackgroundTop    *string `json:"backgroundTop,omitempty"`
	EnableAPI        *bool   `json:"enableApi,omitempty"`
	EnableControls   *bool   `json:"enableControls,omitempty"`
	ForceAutoplay    *bool   `json:"forceAutoplay,omitempty"`
	ForceLoop        *bool   `json:"forceLoop,omitempty"`
	HideTitle        *bool   `json:"hideTitle,omitempty"`
	Link             *string `json:"link,omitempty"`
	LinkHover        *string `json:"linkHover,omitempty"`
	Text             *string `json:"text,omitempty"`
	TrackBackground  *string `json:"trackBackground,omitempty"`
	TrackPlayed      *string `json:"trackPlayed,omitempty"`
	TrackUnplayed    *string `json:"trackUnplayed,omitempty"`
}
