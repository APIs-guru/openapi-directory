package shared

type ProfileUpdateRequest struct {
	HeroAutoplay    *bool    `json:"heroAutoplay,omitempty"`
	HeroWithAudio   *bool    `json:"heroWithAudio,omitempty"`
	LanguageCode    *string  `json:"languageCode,omitempty"`
	Name            *string  `json:"name,omitempty"`
	PinEnabled      *bool    `json:"pinEnabled,omitempty"`
	PurchaseEnabled *bool    `json:"purchaseEnabled,omitempty"`
	Segments        []string `json:"segments,omitempty"`
}
