package shared

// CarRankRequest
// Ranking query request
type CarRankRequest struct {
	ListingIds      []string               `json:"listing_ids,omitempty"`
	RankingCriteria map[string]interface{} `json:"ranking_criteria,omitempty"`
}
