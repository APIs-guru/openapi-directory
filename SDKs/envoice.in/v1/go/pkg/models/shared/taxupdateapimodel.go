package shared

type TaxUpdateAPIModel struct {
	ID         *int32   `json:"Id" form:"name=Id"`
	Name       *string  `json:"Name" form:"name=Name"`
	Percentage *float64 `json:"Percentage" form:"name=Percentage"`
}
