package shared



type BigOvenModelAPIIngredient struct {
    DisplayIndex *int32 `json:"DisplayIndex,omitempty"`
    DisplayQuantity *string `json:"DisplayQuantity,omitempty"`
    HTMLName *string `json:"HTMLName,omitempty"`
    IngredientID *int64 `json:"IngredientID,omitempty"`
    IngredientInfo *BigOvenModelAPIIngredientInfo `json:"IngredientInfo,omitempty"`
    IsHeading *bool `json:"IsHeading,omitempty"`
    IsLinked *bool `json:"IsLinked,omitempty"`
    MetricDisplayQuantity *string `json:"MetricDisplayQuantity,omitempty"`
    MetricQuantity *float64 `json:"MetricQuantity,omitempty"`
    MetricUnit *string `json:"MetricUnit,omitempty"`
    Name *string `json:"Name,omitempty"`
    PreparationNotes *string `json:"PreparationNotes,omitempty"`
    Quantity *float64 `json:"Quantity,omitempty"`
    Unit *string `json:"Unit,omitempty"`
    
}

