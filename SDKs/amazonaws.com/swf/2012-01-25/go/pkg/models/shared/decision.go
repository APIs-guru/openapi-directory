package shared

type Decision struct {
	CancelTimerDecisionAttributes                            *CancelTimerDecisionAttributes                            `json:"cancelTimerDecisionAttributes"`
	CancelWorkflowExecutionDecisionAttributes                *CancelWorkflowExecutionDecisionAttributes                `json:"cancelWorkflowExecutionDecisionAttributes"`
	CompleteWorkflowExecutionDecisionAttributes              *CompleteWorkflowExecutionDecisionAttributes              `json:"completeWorkflowExecutionDecisionAttributes"`
	ContinueAsNewWorkflowExecutionDecisionAttributes         *ContinueAsNewWorkflowExecutionDecisionAttributes         `json:"continueAsNewWorkflowExecutionDecisionAttributes"`
	DecisionType                                             DecisionTypeEnum                                          `json:"decisionType"`
	FailWorkflowExecutionDecisionAttributes                  *FailWorkflowExecutionDecisionAttributes                  `json:"failWorkflowExecutionDecisionAttributes"`
	RecordMarkerDecisionAttributes                           *RecordMarkerDecisionAttributes                           `json:"recordMarkerDecisionAttributes"`
	RequestCancelActivityTaskDecisionAttributes              *RequestCancelActivityTaskDecisionAttributes              `json:"requestCancelActivityTaskDecisionAttributes"`
	RequestCancelExternalWorkflowExecutionDecisionAttributes *RequestCancelExternalWorkflowExecutionDecisionAttributes `json:"requestCancelExternalWorkflowExecutionDecisionAttributes"`
	ScheduleActivityTaskDecisionAttributes                   *ScheduleActivityTaskDecisionAttributes                   `json:"scheduleActivityTaskDecisionAttributes"`
	ScheduleLambdaFunctionDecisionAttributes                 *ScheduleLambdaFunctionDecisionAttributes                 `json:"scheduleLambdaFunctionDecisionAttributes"`
	SignalExternalWorkflowExecutionDecisionAttributes        *SignalExternalWorkflowExecutionDecisionAttributes        `json:"signalExternalWorkflowExecutionDecisionAttributes"`
	StartChildWorkflowExecutionDecisionAttributes            *StartChildWorkflowExecutionDecisionAttributes            `json:"startChildWorkflowExecutionDecisionAttributes"`
	StartTimerDecisionAttributes                             *StartTimerDecisionAttributes                             `json:"startTimerDecisionAttributes"`
}
