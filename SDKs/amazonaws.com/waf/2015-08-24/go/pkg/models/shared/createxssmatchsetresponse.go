package shared

// CreateXSSMatchSetResponse
// The response to a <code>CreateXssMatchSet</code> request.
type CreateXSSMatchSetResponse struct {
	ChangeToken *string      `json:"ChangeToken,omitempty"`
	XSSMatchSet *XSSMatchSet `json:"XssMatchSet,omitempty"`
}
