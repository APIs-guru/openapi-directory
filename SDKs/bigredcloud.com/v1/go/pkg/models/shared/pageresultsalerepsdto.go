package shared



type PageResultSaleRepsDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []SaleRepsDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

