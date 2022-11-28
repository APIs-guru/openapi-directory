package shared

// Union
// A GcRule which deletes cells matching any of the given rules.
type Union struct {
	Rules []GcRule `json:"rules,omitempty"`
}
