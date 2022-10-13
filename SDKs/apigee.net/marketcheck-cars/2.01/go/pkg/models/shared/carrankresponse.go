package shared

type CarRankResponse struct {
	NumRanked      *int64           `json:"num_ranked"`
	RankedListings []CarListingRank `json:"ranked_listings"`
}
