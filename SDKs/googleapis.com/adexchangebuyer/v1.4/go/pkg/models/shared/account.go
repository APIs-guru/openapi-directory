package shared

type AccountBidderLocation struct {
	BidProtocol *string `json:"bidProtocol"`
	MaximumQPS  *int32  `json:"maximumQps"`
	Region      *string `json:"region"`
	URL         *string `json:"url"`
}

type Account struct {
	ApplyPretargetingToNonGuaranteedDeals *bool                   `json:"applyPretargetingToNonGuaranteedDeals"`
	BidderLocation                        []AccountBidderLocation `json:"bidderLocation"`
	CookieMatchingNid                     *string                 `json:"cookieMatchingNid"`
	CookieMatchingURL                     *string                 `json:"cookieMatchingUrl"`
	ID                                    *int32                  `json:"id"`
	Kind                                  *string                 `json:"kind"`
	MaximumActiveCreatives                *int32                  `json:"maximumActiveCreatives"`
	MaximumTotalQPS                       *int32                  `json:"maximumTotalQps"`
	NumberActiveCreatives                 *int32                  `json:"numberActiveCreatives"`
}
