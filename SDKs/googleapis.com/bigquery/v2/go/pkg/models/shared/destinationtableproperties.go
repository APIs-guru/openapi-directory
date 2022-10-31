package shared

import (
"time")

type DestinationTableProperties struct {
    Description *string `json:"description,omitempty"`
    ExpirationTime *time.Time `json:"expirationTime,omitempty"`
    FriendlyName *string `json:"friendlyName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    
}

