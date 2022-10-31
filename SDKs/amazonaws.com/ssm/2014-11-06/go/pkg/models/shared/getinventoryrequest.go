package shared



type GetInventoryRequest struct {
    Aggregators []InventoryAggregator `json:"Aggregators,omitempty"`
    Filters []InventoryFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ResultAttributes []ResultAttribute `json:"ResultAttributes,omitempty"`
    
}

