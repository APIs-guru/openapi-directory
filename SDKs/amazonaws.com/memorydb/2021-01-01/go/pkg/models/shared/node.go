package shared

import (
"time")

type Node struct {
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    CreateTime *time.Time `json:"CreateTime,omitempty"`
    Endpoint *Endpoint `json:"Endpoint,omitempty"`
    Name *string `json:"Name,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

