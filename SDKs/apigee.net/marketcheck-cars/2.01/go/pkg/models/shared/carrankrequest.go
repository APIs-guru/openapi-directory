package shared

type CarRankRequest struct {
	ListingIds      []string               `json:"listing_ids"`
	RankingCriteria map[string]interface{} `json:"ranking_criteria"`
}
