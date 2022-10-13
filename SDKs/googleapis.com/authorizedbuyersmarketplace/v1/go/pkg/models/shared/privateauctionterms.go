package shared

type PrivateAuctionTerms struct {
	FloorPrice         *Price `json:"floorPrice"`
	OpenAuctionAllowed *bool  `json:"openAuctionAllowed"`
}
