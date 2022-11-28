package shared

// Contributor
// A contributor to the attack and their contribution.
type Contributor struct {
	Name  *string `json:"Name,omitempty"`
	Value *int64  `json:"Value,omitempty"`
}
