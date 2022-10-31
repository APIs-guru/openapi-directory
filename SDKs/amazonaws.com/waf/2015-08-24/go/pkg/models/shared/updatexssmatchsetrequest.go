package shared

type UpdateXSSMatchSetRequest struct {
	ChangeToken   string              `json:"ChangeToken"`
	Updates       []XSSMatchSetUpdate `json:"Updates"`
	XSSMatchSetID string              `json:"XssMatchSetId"`
}
