package shared

// RotationRulesType
// A structure that defines the rotation configuration for the secret.
type RotationRulesType struct {
	AutomaticallyAfterDays *int64 `json:"AutomaticallyAfterDays,omitempty"`
}
