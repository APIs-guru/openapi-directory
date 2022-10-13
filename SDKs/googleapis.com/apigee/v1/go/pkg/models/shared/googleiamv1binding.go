package shared

type GoogleIamV1Binding struct {
	Condition *GoogleTypeExpr `json:"condition"`
	Members   []string        `json:"members"`
	Role      *string         `json:"role"`
}
