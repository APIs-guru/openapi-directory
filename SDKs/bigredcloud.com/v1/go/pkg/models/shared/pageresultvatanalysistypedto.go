package shared



type PageResultVatAnalysisTypeDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []VatAnalysisTypeDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

