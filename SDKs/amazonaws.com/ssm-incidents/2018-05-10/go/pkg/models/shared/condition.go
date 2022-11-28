package shared

import (
	"time"
)

// Condition
// A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d.
type Condition struct {
	After  *time.Time          `json:"after,omitempty"`
	Before *time.Time          `json:"before,omitempty"`
	Equals *AttributeValueList `json:"equals,omitempty"`
}
