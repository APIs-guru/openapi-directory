package shared

type Value struct {
	Applicable *bool                  `json:"applicable,omitempty"`
	Value      map[string]interface{} `json:"value,omitempty"`
}
