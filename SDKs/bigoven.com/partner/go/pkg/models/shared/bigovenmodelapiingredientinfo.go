package shared



type BigOvenModelAPIIngredientInfo struct {
    Department *string `json:"Department,omitempty"`
    MasterIngredientID *int32 `json:"MasterIngredientID,omitempty"`
    Name *string `json:"Name,omitempty"`
    UsuallyOnHand *bool `json:"UsuallyOnHand,omitempty"`
    
}

