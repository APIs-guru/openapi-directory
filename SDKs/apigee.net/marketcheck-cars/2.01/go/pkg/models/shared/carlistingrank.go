package shared

// CarListingRank
// Ranking query response
type CarListingRank struct {
	RankedListing map[string]interface{} `json:"ranked_listing,omitempty"`
}
