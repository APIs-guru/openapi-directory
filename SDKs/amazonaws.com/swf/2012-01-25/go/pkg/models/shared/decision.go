package shared



type Decision struct {
    CancelTimerDecisionAttributes *CancelTimerDecisionAttributes `json:"cancelTimerDecisionAttributes,omitempty"`
    CancelWorkflowExecutionDecisionAttributes *CancelWorkflowExecutionDecisionAttributes `json:"cancelWorkflowExecutionDecisionAttributes,omitempty"`
    CompleteWorkflowExecutionDecisionAttributes *CompleteWorkflowExecutionDecisionAttributes `json:"completeWorkflowExecutionDecisionAttributes,omitempty"`
    ContinueAsNewWorkflowExecutionDecisionAttributes *ContinueAsNewWorkflowExecutionDecisionAttributes `json:"continueAsNewWorkflowExecutionDecisionAttributes,omitempty"`
    DecisionType DecisionTypeEnum `json:"decisionType"`
    FailWorkflowExecutionDecisionAttributes *FailWorkflowExecutionDecisionAttributes `json:"failWorkflowExecutionDecisionAttributes,omitempty"`
    RecordMarkerDecisionAttributes *RecordMarkerDecisionAttributes `json:"recordMarkerDecisionAttributes,omitempty"`
    RequestCancelActivityTaskDecisionAttributes *RequestCancelActivityTaskDecisionAttributes `json:"requestCancelActivityTaskDecisionAttributes,omitempty"`
    RequestCancelExternalWorkflowExecutionDecisionAttributes *RequestCancelExternalWorkflowExecutionDecisionAttributes `json:"requestCancelExternalWorkflowExecutionDecisionAttributes,omitempty"`
    ScheduleActivityTaskDecisionAttributes *ScheduleActivityTaskDecisionAttributes `json:"scheduleActivityTaskDecisionAttributes,omitempty"`
    ScheduleLambdaFunctionDecisionAttributes *ScheduleLambdaFunctionDecisionAttributes `json:"scheduleLambdaFunctionDecisionAttributes,omitempty"`
    SignalExternalWorkflowExecutionDecisionAttributes *SignalExternalWorkflowExecutionDecisionAttributes `json:"signalExternalWorkflowExecutionDecisionAttributes,omitempty"`
    StartChildWorkflowExecutionDecisionAttributes *StartChildWorkflowExecutionDecisionAttributes `json:"startChildWorkflowExecutionDecisionAttributes,omitempty"`
    StartTimerDecisionAttributes *StartTimerDecisionAttributes `json:"startTimerDecisionAttributes,omitempty"`
    
}

