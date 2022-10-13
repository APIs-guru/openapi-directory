package shared

type SearchDatabasesByLfTagsRequest struct {
	CatalogID  *string `json:"CatalogId"`
	Expression []LfTag `json:"Expression"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
