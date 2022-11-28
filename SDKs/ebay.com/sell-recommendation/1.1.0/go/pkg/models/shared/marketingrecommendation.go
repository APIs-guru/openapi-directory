package shared

// MarketingRecommendation
// A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
type MarketingRecommendation struct {
	Ad      *Ad     `json:"ad,omitempty"`
	Message *string `json:"message,omitempty"`
}
