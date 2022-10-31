package shared

import (
"time")

type ProfileDetail struct {
    Bookmarked map[string]time.Time `json:"bookmarked"`
    Color *string `json:"color,omitempty"`
    HeroAutoplay *bool `json:"heroAutoplay,omitempty"`
    HeroWithAudio *bool `json:"heroWithAudio,omitempty"`
    ID string `json:"id"`
    IsActive bool `json:"isActive"`
    LanguageCode *string `json:"languageCode,omitempty"`
    MarketingEnabled bool `json:"marketingEnabled"`
    MaxRatingContentFilter *ClassificationSummary `json:"maxRatingContentFilter,omitempty"`
    MinRatingPlaybackGuard *ClassificationSummary `json:"minRatingPlaybackGuard,omitempty"`
    Name string `json:"name"`
    PinEnabled bool `json:"pinEnabled"`
    PurchaseEnabled bool `json:"purchaseEnabled"`
    Rated map[string]int32 `json:"rated"`
    Segments []string `json:"segments"`
    Watched map[string]Watched `json:"watched"`
    
}

