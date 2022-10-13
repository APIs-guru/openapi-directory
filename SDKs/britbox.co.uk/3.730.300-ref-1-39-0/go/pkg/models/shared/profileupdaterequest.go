package shared

type ProfileUpdateRequest struct {
	HeroAutoplay    *bool    `json:"heroAutoplay"`
	HeroWithAudio   *bool    `json:"heroWithAudio"`
	LanguageCode    *string  `json:"languageCode"`
	Name            *string  `json:"name"`
	PinEnabled      *bool    `json:"pinEnabled"`
	PurchaseEnabled *bool    `json:"purchaseEnabled"`
	Segments        []string `json:"segments"`
}
