package shared

type TaxCreateAPIModel struct {
	Name       *string  `json:"Name" form:"name=Name"`
	Percentage *float64 `json:"Percentage" form:"name=Percentage"`
}
