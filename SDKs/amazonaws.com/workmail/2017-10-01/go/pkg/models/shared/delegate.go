package shared

// Delegate
// The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
type Delegate struct {
	ID   string         `json:"Id"`
	Type MemberTypeEnum `json:"Type"`
}
