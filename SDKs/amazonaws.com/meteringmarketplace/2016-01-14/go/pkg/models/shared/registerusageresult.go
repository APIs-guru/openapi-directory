package shared

import (
"time")

type RegisterUsageResult struct {
    PublicKeyRotationTimestamp *time.Time `json:"PublicKeyRotationTimestamp,omitempty"`
    Signature *string `json:"Signature,omitempty"`
    
}

