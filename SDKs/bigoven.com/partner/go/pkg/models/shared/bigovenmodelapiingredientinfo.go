package shared

type BigOvenModelAPIIngredientInfo struct {
	Department         *string `json:"Department"`
	MasterIngredientID *int32  `json:"MasterIngredientID"`
	Name               *string `json:"Name"`
	UsuallyOnHand      *bool   `json:"UsuallyOnHand"`
}
