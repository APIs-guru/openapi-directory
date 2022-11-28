package shared

// AttributeValueList
// Use the AttributeValueList to filter by string or integer values.
type AttributeValueList struct {
	IntegerValues []int64  `json:"integerValues,omitempty"`
	StringValues  []string `json:"stringValues,omitempty"`
}
