package shared

// Target
// The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
type Target struct {
	ID   *string        `json:"Id,omitempty"`
	Type TargetTypeEnum `json:"Type"`
}
