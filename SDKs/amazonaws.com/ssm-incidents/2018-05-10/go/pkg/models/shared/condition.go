package shared

import (
	"time"
)

type Condition struct {
	After  *time.Time          `json:"after"`
	Before *time.Time          `json:"before"`
	Equals *AttributeValueList `json:"equals"`
}
