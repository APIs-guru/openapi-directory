package shared

import (
	"time"
)

// EndpointSummary
// Provides summary information for an endpoint.
type EndpointSummary struct {
	CreationTime     time.Time          `json:"CreationTime"`
	EndpointArn      string             `json:"EndpointArn"`
	EndpointName     string             `json:"EndpointName"`
	EndpointStatus   EndpointStatusEnum `json:"EndpointStatus"`
	LastModifiedTime time.Time          `json:"LastModifiedTime"`
}
