package shared



type PageResultVatRateDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []VatRateDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

