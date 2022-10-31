package shared

import (
"time")

type GetServiceGraphResult struct {
    ContainsOldGroupVersions *bool `json:"ContainsOldGroupVersions,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Services []Service `json:"Services,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

