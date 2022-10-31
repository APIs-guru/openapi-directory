package shared



type ItemDraft struct {
    CategoryID *string `json:"categoryId,omitempty"`
    Charity *Charity `json:"charity,omitempty"`
    Condition *string `json:"condition,omitempty"`
    Format *string `json:"format,omitempty"`
    PricingSummary *PricingSummary `json:"pricingSummary,omitempty"`
    Product *Product `json:"product,omitempty"`
    
}

