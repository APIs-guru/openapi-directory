package shared

import (
"time")

type SuppressedDestination struct {
    Attributes *SuppressedDestinationAttributes `json:"Attributes,omitempty"`
    EmailAddress string `json:"EmailAddress"`
    LastUpdateTime time.Time `json:"LastUpdateTime"`
    Reason SuppressionListReasonEnum `json:"Reason"`
    
}

