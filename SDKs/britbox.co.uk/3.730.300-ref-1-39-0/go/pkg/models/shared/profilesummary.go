package shared

type ProfileSummary struct {
	Color                  *string                `json:"color"`
	HeroAutoplay           *bool                  `json:"heroAutoplay"`
	HeroWithAudio          *bool                  `json:"heroWithAudio"`
	ID                     string                 `json:"id"`
	IsActive               bool                   `json:"isActive"`
	LanguageCode           *string                `json:"languageCode"`
	MarketingEnabled       bool                   `json:"marketingEnabled"`
	MaxRatingContentFilter *ClassificationSummary `json:"maxRatingContentFilter"`
	MinRatingPlaybackGuard *ClassificationSummary `json:"minRatingPlaybackGuard"`
	Name                   string                 `json:"name"`
	PinEnabled             bool                   `json:"pinEnabled"`
	PurchaseEnabled        bool                   `json:"purchaseEnabled"`
	Segments               []string               `json:"segments"`
}
