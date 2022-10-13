package shared

import (
	"time"
)

type HistoryEvent struct {
	ActivityTaskCancelRequestedEventAttributes                     *ActivityTaskCancelRequestedEventAttributes                     `json:"activityTaskCancelRequestedEventAttributes"`
	ActivityTaskCanceledEventAttributes                            *ActivityTaskCanceledEventAttributes                            `json:"activityTaskCanceledEventAttributes"`
	ActivityTaskCompletedEventAttributes                           *ActivityTaskCompletedEventAttributes                           `json:"activityTaskCompletedEventAttributes"`
	ActivityTaskFailedEventAttributes                              *ActivityTaskFailedEventAttributes                              `json:"activityTaskFailedEventAttributes"`
	ActivityTaskScheduledEventAttributes                           *ActivityTaskScheduledEventAttributes                           `json:"activityTaskScheduledEventAttributes"`
	ActivityTaskStartedEventAttributes                             *ActivityTaskStartedEventAttributes                             `json:"activityTaskStartedEventAttributes"`
	ActivityTaskTimedOutEventAttributes                            *ActivityTaskTimedOutEventAttributes                            `json:"activityTaskTimedOutEventAttributes"`
	CancelTimerFailedEventAttributes                               *CancelTimerFailedEventAttributes                               `json:"cancelTimerFailedEventAttributes"`
	CancelWorkflowExecutionFailedEventAttributes                   *CancelWorkflowExecutionFailedEventAttributes                   `json:"cancelWorkflowExecutionFailedEventAttributes"`
	ChildWorkflowExecutionCanceledEventAttributes                  *ChildWorkflowExecutionCanceledEventAttributes                  `json:"childWorkflowExecutionCanceledEventAttributes"`
	ChildWorkflowExecutionCompletedEventAttributes                 *ChildWorkflowExecutionCompletedEventAttributes                 `json:"childWorkflowExecutionCompletedEventAttributes"`
	ChildWorkflowExecutionFailedEventAttributes                    *ChildWorkflowExecutionFailedEventAttributes                    `json:"childWorkflowExecutionFailedEventAttributes"`
	ChildWorkflowExecutionStartedEventAttributes                   *ChildWorkflowExecutionStartedEventAttributes                   `json:"childWorkflowExecutionStartedEventAttributes"`
	ChildWorkflowExecutionTerminatedEventAttributes                *ChildWorkflowExecutionTerminatedEventAttributes                `json:"childWorkflowExecutionTerminatedEventAttributes"`
	ChildWorkflowExecutionTimedOutEventAttributes                  *ChildWorkflowExecutionTimedOutEventAttributes                  `json:"childWorkflowExecutionTimedOutEventAttributes"`
	CompleteWorkflowExecutionFailedEventAttributes                 *CompleteWorkflowExecutionFailedEventAttributes                 `json:"completeWorkflowExecutionFailedEventAttributes"`
	ContinueAsNewWorkflowExecutionFailedEventAttributes            *ContinueAsNewWorkflowExecutionFailedEventAttributes            `json:"continueAsNewWorkflowExecutionFailedEventAttributes"`
	DecisionTaskCompletedEventAttributes                           *DecisionTaskCompletedEventAttributes                           `json:"decisionTaskCompletedEventAttributes"`
	DecisionTaskScheduledEventAttributes                           *DecisionTaskScheduledEventAttributes                           `json:"decisionTaskScheduledEventAttributes"`
	DecisionTaskStartedEventAttributes                             *DecisionTaskStartedEventAttributes                             `json:"decisionTaskStartedEventAttributes"`
	DecisionTaskTimedOutEventAttributes                            *DecisionTaskTimedOutEventAttributes                            `json:"decisionTaskTimedOutEventAttributes"`
	EventID                                                        int64                                                           `json:"eventId"`
	EventTimestamp                                                 time.Time                                                       `json:"eventTimestamp"`
	EventType                                                      EventTypeEnum                                                   `json:"eventType"`
	ExternalWorkflowExecutionCancelRequestedEventAttributes        *ExternalWorkflowExecutionCancelRequestedEventAttributes        `json:"externalWorkflowExecutionCancelRequestedEventAttributes"`
	ExternalWorkflowExecutionSignaledEventAttributes               *ExternalWorkflowExecutionSignaledEventAttributes               `json:"externalWorkflowExecutionSignaledEventAttributes"`
	FailWorkflowExecutionFailedEventAttributes                     *FailWorkflowExecutionFailedEventAttributes                     `json:"failWorkflowExecutionFailedEventAttributes"`
	LambdaFunctionCompletedEventAttributes                         *LambdaFunctionCompletedEventAttributes                         `json:"lambdaFunctionCompletedEventAttributes"`
	LambdaFunctionFailedEventAttributes                            *LambdaFunctionFailedEventAttributes                            `json:"lambdaFunctionFailedEventAttributes"`
	LambdaFunctionScheduledEventAttributes                         *LambdaFunctionScheduledEventAttributes                         `json:"lambdaFunctionScheduledEventAttributes"`
	LambdaFunctionStartedEventAttributes                           *LambdaFunctionStartedEventAttributes                           `json:"lambdaFunctionStartedEventAttributes"`
	LambdaFunctionTimedOutEventAttributes                          *LambdaFunctionTimedOutEventAttributes                          `json:"lambdaFunctionTimedOutEventAttributes"`
	MarkerRecordedEventAttributes                                  *MarkerRecordedEventAttributes                                  `json:"markerRecordedEventAttributes"`
	RecordMarkerFailedEventAttributes                              *RecordMarkerFailedEventAttributes                              `json:"recordMarkerFailedEventAttributes"`
	RequestCancelActivityTaskFailedEventAttributes                 *RequestCancelActivityTaskFailedEventAttributes                 `json:"requestCancelActivityTaskFailedEventAttributes"`
	RequestCancelExternalWorkflowExecutionFailedEventAttributes    *RequestCancelExternalWorkflowExecutionFailedEventAttributes    `json:"requestCancelExternalWorkflowExecutionFailedEventAttributes"`
	RequestCancelExternalWorkflowExecutionInitiatedEventAttributes *RequestCancelExternalWorkflowExecutionInitiatedEventAttributes `json:"requestCancelExternalWorkflowExecutionInitiatedEventAttributes"`
	ScheduleActivityTaskFailedEventAttributes                      *ScheduleActivityTaskFailedEventAttributes                      `json:"scheduleActivityTaskFailedEventAttributes"`
	ScheduleLambdaFunctionFailedEventAttributes                    *ScheduleLambdaFunctionFailedEventAttributes                    `json:"scheduleLambdaFunctionFailedEventAttributes"`
	SignalExternalWorkflowExecutionFailedEventAttributes           *SignalExternalWorkflowExecutionFailedEventAttributes           `json:"signalExternalWorkflowExecutionFailedEventAttributes"`
	SignalExternalWorkflowExecutionInitiatedEventAttributes        *SignalExternalWorkflowExecutionInitiatedEventAttributes        `json:"signalExternalWorkflowExecutionInitiatedEventAttributes"`
	StartChildWorkflowExecutionFailedEventAttributes               *StartChildWorkflowExecutionFailedEventAttributes               `json:"startChildWorkflowExecutionFailedEventAttributes"`
	StartChildWorkflowExecutionInitiatedEventAttributes            *StartChildWorkflowExecutionInitiatedEventAttributes            `json:"startChildWorkflowExecutionInitiatedEventAttributes"`
	StartLambdaFunctionFailedEventAttributes                       *StartLambdaFunctionFailedEventAttributes                       `json:"startLambdaFunctionFailedEventAttributes"`
	StartTimerFailedEventAttributes                                *StartTimerFailedEventAttributes                                `json:"startTimerFailedEventAttributes"`
	TimerCanceledEventAttributes                                   *TimerCanceledEventAttributes                                   `json:"timerCanceledEventAttributes"`
	TimerFiredEventAttributes                                      *TimerFiredEventAttributes                                      `json:"timerFiredEventAttributes"`
	TimerStartedEventAttributes                                    *TimerStartedEventAttributes                                    `json:"timerStartedEventAttributes"`
	WorkflowExecutionCancelRequestedEventAttributes                *WorkflowExecutionCancelRequestedEventAttributes                `json:"workflowExecutionCancelRequestedEventAttributes"`
	WorkflowExecutionCanceledEventAttributes                       *WorkflowExecutionCanceledEventAttributes                       `json:"workflowExecutionCanceledEventAttributes"`
	WorkflowExecutionCompletedEventAttributes                      *WorkflowExecutionCompletedEventAttributes                      `json:"workflowExecutionCompletedEventAttributes"`
	WorkflowExecutionContinuedAsNewEventAttributes                 *WorkflowExecutionContinuedAsNewEventAttributes                 `json:"workflowExecutionContinuedAsNewEventAttributes"`
	WorkflowExecutionFailedEventAttributes                         *WorkflowExecutionFailedEventAttributes                         `json:"workflowExecutionFailedEventAttributes"`
	WorkflowExecutionSignaledEventAttributes                       *WorkflowExecutionSignaledEventAttributes                       `json:"workflowExecutionSignaledEventAttributes"`
	WorkflowExecutionStartedEventAttributes                        *WorkflowExecutionStartedEventAttributes                        `json:"workflowExecutionStartedEventAttributes"`
	WorkflowExecutionTerminatedEventAttributes                     *WorkflowExecutionTerminatedEventAttributes                     `json:"workflowExecutionTerminatedEventAttributes"`
	WorkflowExecutionTimedOutEventAttributes                       *WorkflowExecutionTimedOutEventAttributes                       `json:"workflowExecutionTimedOutEventAttributes"`
}
