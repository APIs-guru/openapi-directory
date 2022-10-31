package shared



type SearchProductsOutput struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    ProductViewAggregations map[string][]ProductViewAggregationValue `json:"ProductViewAggregations,omitempty"`
    ProductViewSummaries []ProductViewSummary `json:"ProductViewSummaries,omitempty"`
    
}

