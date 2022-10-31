package shared

type WebACLUpdate struct {
	Action        ChangeActionEnum `json:"Action"`
	ActivatedRule ActivatedRule    `json:"ActivatedRule"`
}
