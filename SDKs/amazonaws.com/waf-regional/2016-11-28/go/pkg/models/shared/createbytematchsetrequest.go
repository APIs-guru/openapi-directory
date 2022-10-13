package shared

type CreateByteMatchSetRequest struct {
	ChangeToken string `json:"ChangeToken"`
	Name        string `json:"Name"`
}
