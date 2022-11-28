package shared

// MultipleValuesSetting
// Indicates whether a slot can return multiple values.
type MultipleValuesSetting struct {
	AllowMultipleValues *bool `json:"allowMultipleValues,omitempty"`
}
