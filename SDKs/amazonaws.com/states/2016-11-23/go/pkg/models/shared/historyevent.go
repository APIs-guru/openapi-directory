package shared

import (
	"time"
)

type HistoryEvent struct {
	ActivityFailedEventDetails               *ActivityFailedEventDetails               `json:"activityFailedEventDetails"`
	ActivityScheduleFailedEventDetails       *ActivityScheduleFailedEventDetails       `json:"activityScheduleFailedEventDetails"`
	ActivityScheduledEventDetails            *ActivityScheduledEventDetails            `json:"activityScheduledEventDetails"`
	ActivityStartedEventDetails              *ActivityStartedEventDetails              `json:"activityStartedEventDetails"`
	ActivitySucceededEventDetails            *ActivitySucceededEventDetails            `json:"activitySucceededEventDetails"`
	ActivityTimedOutEventDetails             *ActivityTimedOutEventDetails             `json:"activityTimedOutEventDetails"`
	ExecutionAbortedEventDetails             *ExecutionAbortedEventDetails             `json:"executionAbortedEventDetails"`
	ExecutionFailedEventDetails              *ExecutionFailedEventDetails              `json:"executionFailedEventDetails"`
	ExecutionStartedEventDetails             *ExecutionStartedEventDetails             `json:"executionStartedEventDetails"`
	ExecutionSucceededEventDetails           *ExecutionSucceededEventDetails           `json:"executionSucceededEventDetails"`
	ExecutionTimedOutEventDetails            *ExecutionTimedOutEventDetails            `json:"executionTimedOutEventDetails"`
	ID                                       int64                                     `json:"id"`
	LambdaFunctionFailedEventDetails         *LambdaFunctionFailedEventDetails         `json:"lambdaFunctionFailedEventDetails"`
	LambdaFunctionScheduleFailedEventDetails *LambdaFunctionScheduleFailedEventDetails `json:"lambdaFunctionScheduleFailedEventDetails"`
	LambdaFunctionScheduledEventDetails      *LambdaFunctionScheduledEventDetails      `json:"lambdaFunctionScheduledEventDetails"`
	LambdaFunctionStartFailedEventDetails    *LambdaFunctionStartFailedEventDetails    `json:"lambdaFunctionStartFailedEventDetails"`
	LambdaFunctionSucceededEventDetails      *LambdaFunctionSucceededEventDetails      `json:"lambdaFunctionSucceededEventDetails"`
	LambdaFunctionTimedOutEventDetails       *LambdaFunctionTimedOutEventDetails       `json:"lambdaFunctionTimedOutEventDetails"`
	MapIterationAbortedEventDetails          *MapIterationEventDetails                 `json:"mapIterationAbortedEventDetails"`
	MapIterationFailedEventDetails           *MapIterationEventDetails                 `json:"mapIterationFailedEventDetails"`
	MapIterationStartedEventDetails          *MapIterationEventDetails                 `json:"mapIterationStartedEventDetails"`
	MapIterationSucceededEventDetails        *MapIterationEventDetails                 `json:"mapIterationSucceededEventDetails"`
	MapStateStartedEventDetails              *MapStateStartedEventDetails              `json:"mapStateStartedEventDetails"`
	PreviousEventID                          *int64                                    `json:"previousEventId"`
	StateEnteredEventDetails                 *StateEnteredEventDetails                 `json:"stateEnteredEventDetails"`
	StateExitedEventDetails                  *StateExitedEventDetails                  `json:"stateExitedEventDetails"`
	TaskFailedEventDetails                   *TaskFailedEventDetails                   `json:"taskFailedEventDetails"`
	TaskScheduledEventDetails                *TaskScheduledEventDetails                `json:"taskScheduledEventDetails"`
	TaskStartFailedEventDetails              *TaskStartFailedEventDetails              `json:"taskStartFailedEventDetails"`
	TaskStartedEventDetails                  *TaskStartedEventDetails                  `json:"taskStartedEventDetails"`
	TaskSubmitFailedEventDetails             *TaskSubmitFailedEventDetails             `json:"taskSubmitFailedEventDetails"`
	TaskSubmittedEventDetails                *TaskSubmittedEventDetails                `json:"taskSubmittedEventDetails"`
	TaskSucceededEventDetails                *TaskSucceededEventDetails                `json:"taskSucceededEventDetails"`
	TaskTimedOutEventDetails                 *TaskTimedOutEventDetails                 `json:"taskTimedOutEventDetails"`
	Timestamp                                time.Time                                 `json:"timestamp"`
	Type                                     HistoryEventTypeEnum                      `json:"type"`
}
