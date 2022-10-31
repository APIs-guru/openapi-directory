package shared

import (
"time")

type LaunchDetails struct {
    LatestLaunchTime *time.Time `json:"latestLaunchTime,omitempty"`
    StackID *string `json:"stackId,omitempty"`
    StackName *string `json:"stackName,omitempty"`
    
}

