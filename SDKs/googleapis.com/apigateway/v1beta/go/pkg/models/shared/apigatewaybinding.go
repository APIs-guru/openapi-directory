package shared

// ApigatewayBinding
// Associates `members`, or principals, with a `role`.
type ApigatewayBinding struct {
	Condition *ApigatewayExpr `json:"condition,omitempty"`
	Members   []string        `json:"members,omitempty"`
	Role      *string         `json:"role,omitempty"`
}
