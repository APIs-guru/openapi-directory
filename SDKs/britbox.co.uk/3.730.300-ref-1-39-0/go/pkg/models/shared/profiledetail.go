package shared

import (
	"time"
)

type ProfileDetail struct {
	Bookmarked             map[string]time.Time   `json:"bookmarked"`
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
	Rated                  map[string]int32       `json:"rated"`
	Segments               []string               `json:"segments"`
	Watched                map[string]Watched     `json:"watched"`
}
