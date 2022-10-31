package shared

import (
"time")

type StartChangeRequestExecutionRequest struct {
    ChangeDetails *string `json:"ChangeDetails,omitempty"`
    ChangeRequestName *string `json:"ChangeRequestName,omitempty"`
    ClientToken *string `json:"ClientToken,omitempty"`
    DocumentName string `json:"DocumentName"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    Runbooks []Runbook `json:"Runbooks"`
    ScheduledEndTime *time.Time `json:"ScheduledEndTime,omitempty"`
    ScheduledTime *time.Time `json:"ScheduledTime,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

