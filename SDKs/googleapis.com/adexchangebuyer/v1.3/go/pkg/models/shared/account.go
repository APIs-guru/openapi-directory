package shared

type AccountBidderLocation struct {
	MaximumQPS *int32  `json:"maximumQps"`
	Region     *string `json:"region"`
	URL        *string `json:"url"`
}

type Account struct {
	BidderLocation         []AccountBidderLocation `json:"bidderLocation"`
	CookieMatchingNid      *string                 `json:"cookieMatchingNid"`
	CookieMatchingURL      *string                 `json:"cookieMatchingUrl"`
	ID                     *int32                  `json:"id"`
	Kind                   *string                 `json:"kind"`
	MaximumActiveCreatives *int32                  `json:"maximumActiveCreatives"`
	MaximumTotalQPS        *int32                  `json:"maximumTotalQps"`
	NumberActiveCreatives  *int32                  `json:"numberActiveCreatives"`
}
