package shared

// ApigatewayBinding
// Associates `members` with a `role`.
type ApigatewayBinding struct {
	Condition *ApigatewayExpr `json:"condition,omitempty"`
	Members   []string        `json:"members,omitempty"`
	Role      *string         `json:"role,omitempty"`
}
