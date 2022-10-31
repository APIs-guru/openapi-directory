package shared

import (
"time")

type DescribeCustomPluginResponse struct {
    CreationTime *time.Time `json:"creationTime,omitempty"`
    CustomPluginArn *string `json:"customPluginArn,omitempty"`
    CustomPluginState *CustomPluginStateEnum `json:"customPluginState,omitempty"`
    Description *string `json:"description,omitempty"`
    LatestRevision *CustomPluginRevisionSummary `json:"latestRevision,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

