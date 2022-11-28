package shared

// TermsAndConditions
// A terms and conditions page to be accepted during provisioning.
type TermsAndConditions struct {
	Content *UserFacingMessage `json:"content,omitempty"`
	Header  *UserFacingMessage `json:"header,omitempty"`
}
