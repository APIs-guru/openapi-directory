package shared

type DeleteXSSMatchSetRequest struct {
	ChangeToken   string `json:"ChangeToken"`
	XSSMatchSetID string `json:"XssMatchSetId"`
}
