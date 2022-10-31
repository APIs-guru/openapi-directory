package shared



type VariationDetails struct {
    Sku *string `json:"sku,omitempty"`
    VariationAspects []NameValueList `json:"variationAspects,omitempty"`
    
}

