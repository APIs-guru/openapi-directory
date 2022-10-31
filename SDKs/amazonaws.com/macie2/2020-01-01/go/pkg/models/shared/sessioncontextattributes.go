package shared

import (
"time")

type SessionContextAttributes struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    MfaAuthenticated *bool `json:"mfaAuthenticated,omitempty"`
    
}

