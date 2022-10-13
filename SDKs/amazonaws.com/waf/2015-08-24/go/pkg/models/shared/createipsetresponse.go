package shared

type CreateIPSetResponse struct {
	ChangeToken *string `json:"ChangeToken"`
	IPSet       *IPSet  `json:"IPSet"`
}
