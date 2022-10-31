package shared



type VatRateDto struct {
    ID *int64 `json:"id,omitempty"`
    IsActive *bool `json:"isActive,omitempty"`
    IsDefault *bool `json:"isDefault,omitempty"`
    OrderIndex *int32 `json:"orderIndex,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    VatCategoryID *int64 `json:"vatCategoryId,omitempty"`
    
}

