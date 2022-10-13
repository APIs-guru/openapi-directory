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
	DataSourceID            *string                `json:"dataSourceId"`
	DestinationDatasetID    *string                `json:"destinationDatasetId"`
	EmailPreferences        *EmailPreferences      `json:"emailPreferences"`
	EndTime                 *string                `json:"endTime"`
	ErrorStatus             *Status                `json:"errorStatus"`
	Name                    *string                `json:"name"`
	NotificationPubsubTopic *string                `json:"notificationPubsubTopic"`
	Params                  map[string]interface{} `json:"params"`
	RunTime                 *string                `json:"runTime"`
	Schedule                *string                `json:"schedule"`
	ScheduleTime            *string                `json:"scheduleTime"`
	StartTime               *string                `json:"startTime"`
	State                   *TransferRunStateEnum  `json:"state"`
	UpdateTime              *string                `json:"updateTime"`
	UserID                  *string                `json:"userId"`
}
