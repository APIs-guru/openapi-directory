package shared

import (
"time")

type TrialComponentSimpleSummary struct {
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    TrialComponentArn *string `json:"TrialComponentArn,omitempty"`
    TrialComponentName *string `json:"TrialComponentName,omitempty"`
    TrialComponentSource *TrialComponentSource `json:"TrialComponentSource,omitempty"`
    
}

