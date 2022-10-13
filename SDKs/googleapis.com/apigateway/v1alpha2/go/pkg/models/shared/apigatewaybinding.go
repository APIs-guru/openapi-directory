package shared

type ApigatewayBinding struct {
	Condition *ApigatewayExpr `json:"condition"`
	Members   []string        `json:"members"`
	Role      *string         `json:"role"`
}
