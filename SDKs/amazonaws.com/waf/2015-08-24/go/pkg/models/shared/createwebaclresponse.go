package shared

type CreateWebACLResponse struct {
	ChangeToken *string `json:"ChangeToken"`
	WebACL      *WebACL `json:"WebACL"`
}
