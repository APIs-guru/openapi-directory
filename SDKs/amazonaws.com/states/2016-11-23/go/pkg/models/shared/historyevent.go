package shared

import (
"time")

type HistoryEvent struct {
    ActivityFailedEventDetails *ActivityFailedEventDetails `json:"activityFailedEventDetails,omitempty"`
    ActivityScheduleFailedEventDetails *ActivityScheduleFailedEventDetails `json:"activityScheduleFailedEventDetails,omitempty"`
    ActivityScheduledEventDetails *ActivityScheduledEventDetails `json:"activityScheduledEventDetails,omitempty"`
    ActivityStartedEventDetails *ActivityStartedEventDetails `json:"activityStartedEventDetails,omitempty"`
    ActivitySucceededEventDetails *ActivitySucceededEventDetails `json:"activitySucceededEventDetails,omitempty"`
    ActivityTimedOutEventDetails *ActivityTimedOutEventDetails `json:"activityTimedOutEventDetails,omitempty"`
    ExecutionAbortedEventDetails *ExecutionAbortedEventDetails `json:"executionAbortedEventDetails,omitempty"`
    ExecutionFailedEventDetails *ExecutionFailedEventDetails `json:"executionFailedEventDetails,omitempty"`
    ExecutionStartedEventDetails *ExecutionStartedEventDetails `json:"executionStartedEventDetails,omitempty"`
    ExecutionSucceededEventDetails *ExecutionSucceededEventDetails `json:"executionSucceededEventDetails,omitempty"`
    ExecutionTimedOutEventDetails *ExecutionTimedOutEventDetails `json:"executionTimedOutEventDetails,omitempty"`
    ID int64 `json:"id"`
    LambdaFunctionFailedEventDetails *LambdaFunctionFailedEventDetails `json:"lambdaFunctionFailedEventDetails,omitempty"`
    LambdaFunctionScheduleFailedEventDetails *LambdaFunctionScheduleFailedEventDetails `json:"lambdaFunctionScheduleFailedEventDetails,omitempty"`
    LambdaFunctionScheduledEventDetails *LambdaFunctionScheduledEventDetails `json:"lambdaFunctionScheduledEventDetails,omitempty"`
    LambdaFunctionStartFailedEventDetails *LambdaFunctionStartFailedEventDetails `json:"lambdaFunctionStartFailedEventDetails,omitempty"`
    LambdaFunctionSucceededEventDetails *LambdaFunctionSucceededEventDetails `json:"lambdaFunctionSucceededEventDetails,omitempty"`
    LambdaFunctionTimedOutEventDetails *LambdaFunctionTimedOutEventDetails `json:"lambdaFunctionTimedOutEventDetails,omitempty"`
    MapIterationAbortedEventDetails *MapIterationEventDetails `json:"mapIterationAbortedEventDetails,omitempty"`
    MapIterationFailedEventDetails *MapIterationEventDetails `json:"mapIterationFailedEventDetails,omitempty"`
    MapIterationStartedEventDetails *MapIterationEventDetails `json:"mapIterationStartedEventDetails,omitempty"`
    MapIterationSucceededEventDetails *MapIterationEventDetails `json:"mapIterationSucceededEventDetails,omitempty"`
    MapStateStartedEventDetails *MapStateStartedEventDetails `json:"mapStateStartedEventDetails,omitempty"`
    PreviousEventID *int64 `json:"previousEventId,omitempty"`
    StateEnteredEventDetails *StateEnteredEventDetails `json:"stateEnteredEventDetails,omitempty"`
    StateExitedEventDetails *StateExitedEventDetails `json:"stateExitedEventDetails,omitempty"`
    TaskFailedEventDetails *TaskFailedEventDetails `json:"taskFailedEventDetails,omitempty"`
    TaskScheduledEventDetails *TaskScheduledEventDetails `json:"taskScheduledEventDetails,omitempty"`
    TaskStartFailedEventDetails *TaskStartFailedEventDetails `json:"taskStartFailedEventDetails,omitempty"`
    TaskStartedEventDetails *TaskStartedEventDetails `json:"taskStartedEventDetails,omitempty"`
    TaskSubmitFailedEventDetails *TaskSubmitFailedEventDetails `json:"taskSubmitFailedEventDetails,omitempty"`
    TaskSubmittedEventDetails *TaskSubmittedEventDetails `json:"taskSubmittedEventDetails,omitempty"`
    TaskSucceededEventDetails *TaskSucceededEventDetails `json:"taskSucceededEventDetails,omitempty"`
    TaskTimedOutEventDetails *TaskTimedOutEventDetails `json:"taskTimedOutEventDetails,omitempty"`
    Timestamp time.Time `json:"timestamp"`
    Type HistoryEventTypeEnum `json:"type"`
    
}

