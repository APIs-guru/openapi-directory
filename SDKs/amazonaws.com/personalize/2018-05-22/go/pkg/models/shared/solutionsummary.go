package shared

import (
"time")

type SolutionSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    SolutionArn *string `json:"solutionArn,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

