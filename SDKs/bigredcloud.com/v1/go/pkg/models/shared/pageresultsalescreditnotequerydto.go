package shared



type PageResultSalesCreditNoteQueryDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []SalesCreditNoteQueryDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

