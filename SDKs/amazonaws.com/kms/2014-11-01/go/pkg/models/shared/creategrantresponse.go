package shared

type CreateGrantResponse struct {
	GrantID    *string `json:"GrantId"`
	GrantToken *string `json:"GrantToken"`
}
