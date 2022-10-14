package shared

type CreateIPSetResponse struct {
	ChangeToken *string `json:"ChangeToken,omitempty"`
	IPSet       *IPSet  `json:"IPSet,omitempty"`
}
