package shared

type CreateGrantRequest struct {
	Constraints       *GrantConstraints    `json:"Constraints,omitempty"`
	GrantTokens       []string             `json:"GrantTokens,omitempty"`
	GranteePrincipal  string               `json:"GranteePrincipal"`
	KeyID             string               `json:"KeyId"`
	Name              *string              `json:"Name,omitempty"`
	Operations        []GrantOperationEnum `json:"Operations"`
	RetiringPrincipal *string              `json:"RetiringPrincipal,omitempty"`
}
