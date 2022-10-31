package shared



type ListLfTagsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResourceShareType *ResourceShareTypeEnum `json:"ResourceShareType,omitempty"`
    
}

