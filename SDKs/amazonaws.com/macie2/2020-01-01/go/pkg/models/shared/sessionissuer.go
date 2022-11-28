package shared

// SessionIssuer
// Provides information about the source and type of temporary security credentials that were issued to an entity.
type SessionIssuer struct {
	AccountID   *string `json:"accountId,omitempty"`
	Arn         *string `json:"arn,omitempty"`
	PrincipalID *string `json:"principalId,omitempty"`
	Type        *string `json:"type,omitempty"`
	UserName    *string `json:"userName,omitempty"`
}
