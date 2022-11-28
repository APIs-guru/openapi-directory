package shared

// UpdateXSSMatchSetRequest
// A request to update an <a>XssMatchSet</a>.
type UpdateXSSMatchSetRequest struct {
	ChangeToken   string              `json:"ChangeToken"`
	Updates       []XSSMatchSetUpdate `json:"Updates"`
	XSSMatchSetID string              `json:"XssMatchSetId"`
}
