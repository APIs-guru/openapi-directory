package shared

type DeleteWebACLRequest struct {
	ChangeToken string `json:"ChangeToken"`
	WebACLID    string `json:"WebACLId"`
}
