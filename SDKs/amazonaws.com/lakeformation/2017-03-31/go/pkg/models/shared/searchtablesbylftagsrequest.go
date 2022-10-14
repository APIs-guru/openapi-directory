package shared

type SearchTablesByLfTagsRequest struct {
	CatalogID  *string `json:"CatalogId,omitempty"`
	Expression []LfTag `json:"Expression"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}
