package shared



type ProfileSummary struct {
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
    Segments []string `json:"segments"`
    
}

