package shared

type Playerinput struct {
	BackgroundBottom *string `json:"backgroundBottom"`
	BackgroundText   *string `json:"backgroundText"`
	BackgroundTop    *string `json:"backgroundTop"`
	EnableAPI        *bool   `json:"enableApi"`
	EnableControls   *bool   `json:"enableControls"`
	ForceAutoplay    *bool   `json:"forceAutoplay"`
	ForceLoop        *bool   `json:"forceLoop"`
	HideTitle        *bool   `json:"hideTitle"`
	Link             *string `json:"link"`
	LinkHover        *string `json:"linkHover"`
	Text             *string `json:"text"`
	TrackBackground  *string `json:"trackBackground"`
	TrackPlayed      *string `json:"trackPlayed"`
	TrackUnplayed    *string `json:"trackUnplayed"`
}
