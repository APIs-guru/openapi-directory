package shared

import (
"time")

type Condition struct {
    After *time.Time `json:"after,omitempty"`
    Before *time.Time `json:"before,omitempty"`
    Equals *AttributeValueList `json:"equals,omitempty"`
    
}

