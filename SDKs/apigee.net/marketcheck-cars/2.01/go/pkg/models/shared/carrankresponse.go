package shared

// CarRankResponse
// Ranking query response
type CarRankResponse struct {
	NumRanked      *int64           `json:"num_ranked,omitempty"`
	RankedListings []CarListingRank `json:"ranked_listings,omitempty"`
}
