package shared



type PageResultSalesEntryQueryDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []SalesEntryQueryDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

