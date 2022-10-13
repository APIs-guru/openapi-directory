package shared

import (
	"time"
)

type LaunchDetails struct {
	LatestLaunchTime *time.Time `json:"latestLaunchTime"`
	StackID          *string    `json:"stackId"`
	StackName        *string    `json:"stackName"`
}
