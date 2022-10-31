package shared



type ProductItemAPIModel struct {
    Cost *float64 `json:"Cost,omitempty"`
    Description *string `json:"Description,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    MinimumQuantity *float64 `json:"MinimumQuantity,omitempty"`
    ReferenceID *string `json:"ReferenceId,omitempty"`
    SubTotalAmount *float64 `json:"SubTotalAmount,omitempty"`
    TaxAmount *float64 `json:"TaxAmount,omitempty"`
    TaxID *int32 `json:"TaxId,omitempty"`
    TaxPercentage *float64 `json:"TaxPercentage,omitempty"`
    TotalAmount *float64 `json:"TotalAmount,omitempty"`
    WorkTypeID *int32 `json:"WorkTypeId,omitempty"`
    
}

