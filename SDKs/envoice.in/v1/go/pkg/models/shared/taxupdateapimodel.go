package shared

type TaxUpdateAPIModel struct {
	ID         *int32   `json:"Id,omitempty" form:"name=Id"`
	Name       *string  `json:"Name,omitempty" form:"name=Name"`
	Percentage *float64 `json:"Percentage,omitempty" form:"name=Percentage"`
}
