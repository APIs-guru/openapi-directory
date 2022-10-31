package shared



type PageResultSupplierQueryDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []SupplierQueryDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

