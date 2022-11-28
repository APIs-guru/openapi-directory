package shared

// NestedParameter
// JSON template for a parameter used in various reports.
type NestedParameter struct {
	BoolValue      *bool    `json:"boolValue,omitempty"`
	IntValue       *string  `json:"intValue,omitempty"`
	MultiBoolValue []bool   `json:"multiBoolValue,omitempty"`
	MultiIntValue  []string `json:"multiIntValue,omitempty"`
	MultiValue     []string `json:"multiValue,omitempty"`
	Name           *string  `json:"name,omitempty"`
	Value          *string  `json:"value,omitempty"`
}
