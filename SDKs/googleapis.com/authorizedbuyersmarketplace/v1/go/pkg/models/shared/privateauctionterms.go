package shared

// PrivateAuctionTermsInput
// Pricing terms for Private Auctions.
type PrivateAuctionTermsInput struct {
	FloorPrice *Price `json:"floorPrice,omitempty"`
}

// PrivateAuctionTerms
// Pricing terms for Private Auctions.
type PrivateAuctionTerms struct {
	FloorPrice         *Price `json:"floorPrice,omitempty"`
	OpenAuctionAllowed *bool  `json:"openAuctionAllowed,omitempty"`
}
