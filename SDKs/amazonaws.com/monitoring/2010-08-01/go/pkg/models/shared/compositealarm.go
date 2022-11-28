package shared

import (
	"time"
)

// CompositeAlarm
// The details about a composite alarm.
type CompositeAlarm struct {
	ActionsEnabled                     *bool
	AlarmActions                       []string
	AlarmArn                           *string
	AlarmConfigurationUpdatedTimestamp *time.Time
	AlarmDescription                   *string
	AlarmName                          *string
	AlarmRule                          *string
	InsufficientDataActions            []string
	OkActions                          []string
	StateReason                        *string
	StateReasonData                    *string
	StateUpdatedTimestamp              *time.Time
	StateValue                         *StateValueEnum
}
