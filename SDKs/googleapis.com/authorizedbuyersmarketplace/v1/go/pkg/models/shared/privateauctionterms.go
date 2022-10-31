package shared



type PrivateAuctionTerms struct {
    FloorPrice *Price `json:"floorPrice,omitempty"`
    OpenAuctionAllowed *bool `json:"openAuctionAllowed,omitempty"`
    
}

