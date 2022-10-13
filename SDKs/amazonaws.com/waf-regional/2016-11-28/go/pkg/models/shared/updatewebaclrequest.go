package shared

type UpdateWebACLRequest struct {
	ChangeToken   string         `json:"ChangeToken"`
	DefaultAction *WafAction     `json:"DefaultAction"`
	Updates       []WebACLUpdate `json:"Updates"`
	WebACLID      string         `json:"WebACLId"`
}
