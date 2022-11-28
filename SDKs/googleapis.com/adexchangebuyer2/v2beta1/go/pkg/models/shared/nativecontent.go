package shared

// NativeContent
// Native content for a creative.
type NativeContent struct {
	AdvertiserName   *string  `json:"advertiserName,omitempty"`
	AppIcon          *Image   `json:"appIcon,omitempty"`
	Body             *string  `json:"body,omitempty"`
	CallToAction     *string  `json:"callToAction,omitempty"`
	ClickLinkURL     *string  `json:"clickLinkUrl,omitempty"`
	ClickTrackingURL *string  `json:"clickTrackingUrl,omitempty"`
	Headline         *string  `json:"headline,omitempty"`
	Image            *Image   `json:"image,omitempty"`
	Logo             *Image   `json:"logo,omitempty"`
	PriceDisplayText *string  `json:"priceDisplayText,omitempty"`
	StarRating       *float64 `json:"starRating,omitempty"`
	StoreURL         *string  `json:"storeUrl,omitempty"`
	VideoURL         *string  `json:"videoUrl,omitempty"`
}
