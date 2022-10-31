package shared

import (
"time")

type StateModelGet struct {
    By *string `json:"by,omitempty"`
    Since *time.Time `json:"since,omitempty"`
    Value *bool `json:"value,omitempty"`
    
}

