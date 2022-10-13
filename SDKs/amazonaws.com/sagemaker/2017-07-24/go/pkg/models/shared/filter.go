package shared

type Filter struct {
	Name     string        `json:"Name"`
	Operator *OperatorEnum `json:"Operator"`
	Value    *string       `json:"Value"`
}
