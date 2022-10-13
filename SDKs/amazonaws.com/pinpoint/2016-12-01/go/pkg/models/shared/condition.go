package shared

type Condition struct {
	Conditions []SimpleCondition `json:"Conditions"`
	Operator   *OperatorEnum     `json:"Operator"`
}
