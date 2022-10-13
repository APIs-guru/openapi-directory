package shared

type CreateXSSMatchSetResponse struct {
	ChangeToken *string      `json:"ChangeToken"`
	XSSMatchSet *XSSMatchSet `json:"XssMatchSet"`
}
