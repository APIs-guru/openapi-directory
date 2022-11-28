package shared

import (
	"time"
)

// EndpointConfigSummary
// Provides summary information for an endpoint configuration.
type EndpointConfigSummary struct {
	CreationTime       time.Time `json:"CreationTime"`
	EndpointConfigArn  string    `json:"EndpointConfigArn"`
	EndpointConfigName string    `json:"EndpointConfigName"`
}
