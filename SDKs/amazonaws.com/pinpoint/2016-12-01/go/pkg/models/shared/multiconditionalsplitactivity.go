package shared



type MultiConditionalSplitActivity struct {
    Branches []MultiConditionalBranch `json:"Branches,omitempty"`
    DefaultActivity *string `json:"DefaultActivity,omitempty"`
    EvaluationWaitTime *WaitTime `json:"EvaluationWaitTime,omitempty"`
    
}

