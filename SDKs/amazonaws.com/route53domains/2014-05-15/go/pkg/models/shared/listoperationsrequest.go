package shared

import (
"time")

type ListOperationsRequest struct {
    Marker *string `json:"Marker,omitempty"`
    MaxItems *int64 `json:"MaxItems,omitempty"`
    SubmittedSince *time.Time `json:"SubmittedSince,omitempty"`
    
}

