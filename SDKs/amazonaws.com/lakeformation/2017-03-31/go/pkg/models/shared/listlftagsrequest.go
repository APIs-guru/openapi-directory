package shared

type ListLfTagsRequest struct {
	CatalogID         *string                `json:"CatalogId"`
	MaxResults        *int64                 `json:"MaxResults"`
	NextToken         *string                `json:"NextToken"`
	ResourceShareType *ResourceShareTypeEnum `json:"ResourceShareType"`
}
