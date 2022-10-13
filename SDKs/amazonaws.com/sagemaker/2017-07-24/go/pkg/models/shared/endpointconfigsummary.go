package shared

import (
	"time"
)

type EndpointConfigSummary struct {
	CreationTime       time.Time `json:"CreationTime"`
	EndpointConfigArn  string    `json:"EndpointConfigArn"`
	EndpointConfigName string    `json:"EndpointConfigName"`
}
