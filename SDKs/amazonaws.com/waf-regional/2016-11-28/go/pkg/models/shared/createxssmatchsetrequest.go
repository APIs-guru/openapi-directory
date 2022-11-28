package shared

// CreateXSSMatchSetRequest
// A request to create an <a>XssMatchSet</a>.
type CreateXSSMatchSetRequest struct {
	ChangeToken string `json:"ChangeToken"`
	Name        string `json:"Name"`
}
