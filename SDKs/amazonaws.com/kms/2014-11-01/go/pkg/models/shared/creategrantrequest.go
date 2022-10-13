package shared

type CreateGrantRequest struct {
	Constraints       *GrantConstraints    `json:"Constraints"`
	GrantTokens       []string             `json:"GrantTokens"`
	GranteePrincipal  string               `json:"GranteePrincipal"`
	KeyID             string               `json:"KeyId"`
	Name              *string              `json:"Name"`
	Operations        []GrantOperationEnum `json:"Operations"`
	RetiringPrincipal *string              `json:"RetiringPrincipal"`
}
