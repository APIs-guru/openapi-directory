package shared

import (
	"time"
)

// LaunchDetails
// Details about the latest launch of an application.
type LaunchDetails struct {
	LatestLaunchTime *time.Time `json:"latestLaunchTime,omitempty"`
	StackID          *string    `json:"stackId,omitempty"`
	StackName        *string    `json:"stackName,omitempty"`
}
