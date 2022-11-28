package shared

// Value
// A complex type that contains a value, plus the veracity of that value.
type Value struct {
	Applicable *bool                  `json:"applicable,omitempty"`
	Value      map[string]interface{} `json:"value,omitempty"`
}
