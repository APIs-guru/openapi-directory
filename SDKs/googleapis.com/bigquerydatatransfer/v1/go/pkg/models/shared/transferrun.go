package shared

type TransferRunStateEnum string

const (
	TransferRunStateEnumTransferStateUnspecified TransferRunStateEnum = "TRANSFER_STATE_UNSPECIFIED"
	TransferRunStateEnumPending                  TransferRunStateEnum = "PENDING"
	TransferRunStateEnumRunning                  TransferRunStateEnum = "RUNNING"
	TransferRunStateEnumSucceeded                TransferRunStateEnum = "SUCCEEDED"
	TransferRunStateEnumFailed                   TransferRunStateEnum = "FAILED"
	TransferRunStateEnumCancelled                TransferRunStateEnum = "CANCELLED"
)

type TransferRun struct {
	DataSourceID            *string                `json:"dataSourceId,omitempty"`
	DestinationDatasetID    *string                `json:"destinationDatasetId,omitempty"`
	EmailPreferences        *EmailPreferences      `json:"emailPreferences,omitempty"`
	EndTime                 *string                `json:"endTime,omitempty"`
	ErrorStatus             *Status                `json:"errorStatus,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	NotificationPubsubTopic *string                `json:"notificationPubsubTopic,omitempty"`
	Params                  map[string]interface{} `json:"params,omitempty"`
	RunTime                 *string                `json:"runTime,omitempty"`
	Schedule                *string                `json:"schedule,omitempty"`
	ScheduleTime            *string                `json:"scheduleTime,omitempty"`
	StartTime               *string                `json:"startTime,omitempty"`
	State                   *TransferRunStateEnum  `json:"state,omitempty"`
	UpdateTime              *string                `json:"updateTime,omitempty"`
	UserID                  *string                `json:"userId,omitempty"`
}
