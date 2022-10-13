package shared

type RetireGrantRequest struct {
	GrantID    *string `json:"GrantId"`
	GrantToken *string `json:"GrantToken"`
	KeyID      *string `json:"KeyId"`
}
