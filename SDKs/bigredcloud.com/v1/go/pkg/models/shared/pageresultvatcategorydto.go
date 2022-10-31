package shared



type PageResultVatCategoryDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []VatCategoryDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

