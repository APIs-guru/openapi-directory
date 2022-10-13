package shared

type DeleteIPSetRequest struct {
	ChangeToken string `json:"ChangeToken"`
	IPSetID     string `json:"IPSetId"`
}
