package shared



type ConditionalSplitActivity struct {
    Condition *Condition `json:"Condition,omitempty"`
    EvaluationWaitTime *WaitTime `json:"EvaluationWaitTime,omitempty"`
    FalseActivity *string `json:"FalseActivity,omitempty"`
    TrueActivity *string `json:"TrueActivity,omitempty"`
    
}

