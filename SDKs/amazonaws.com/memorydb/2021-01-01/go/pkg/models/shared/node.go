package shared

import (
	"time"
)

// Node
// Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.
type Node struct {
	AvailabilityZone *string    `json:"AvailabilityZone,omitempty"`
	CreateTime       *time.Time `json:"CreateTime,omitempty"`
	Endpoint         *Endpoint  `json:"Endpoint,omitempty"`
	Name             *string    `json:"Name,omitempty"`
	Status           *string    `json:"Status,omitempty"`
}
