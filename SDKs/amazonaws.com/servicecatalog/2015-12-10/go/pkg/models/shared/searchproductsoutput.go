package shared

type SearchProductsOutput struct {
	NextPageToken           *string                                  `json:"NextPageToken"`
	ProductViewAggregations map[string][]ProductViewAggregationValue `json:"ProductViewAggregations"`
	ProductViewSummaries    []ProductViewSummary                     `json:"ProductViewSummaries"`
}
