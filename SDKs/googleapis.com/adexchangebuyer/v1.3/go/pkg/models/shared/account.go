package shared

type AccountBidderLocation struct {
	MaximumQPS *int32  `json:"maximumQps,omitempty"`
	Region     *string `json:"region,omitempty"`
	URL        *string `json:"url,omitempty"`
}

// Account
// Configuration data for an Ad Exchange buyer account.
type Account struct {
	BidderLocation         []AccountBidderLocation `json:"bidderLocation,omitempty"`
	CookieMatchingNid      *string                 `json:"cookieMatchingNid,omitempty"`
	CookieMatchingURL      *string                 `json:"cookieMatchingUrl,omitempty"`
	ID                     *int32                  `json:"id,omitempty"`
	Kind                   *string                 `json:"kind,omitempty"`
	MaximumActiveCreatives *int32                  `json:"maximumActiveCreatives,omitempty"`
	MaximumTotalQPS        *int32                  `json:"maximumTotalQps,omitempty"`
	NumberActiveCreatives  *int32                  `json:"numberActiveCreatives,omitempty"`
}
