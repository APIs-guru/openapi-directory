package shared

type TransferConfigStateEnum string

const (
	TransferConfigStateEnumTransferStateUnspecified TransferConfigStateEnum = "TRANSFER_STATE_UNSPECIFIED"
	TransferConfigStateEnumPending                  TransferConfigStateEnum = "PENDING"
	TransferConfigStateEnumRunning                  TransferConfigStateEnum = "RUNNING"
	TransferConfigStateEnumSucceeded                TransferConfigStateEnum = "SUCCEEDED"
	TransferConfigStateEnumFailed                   TransferConfigStateEnum = "FAILED"
	TransferConfigStateEnumCancelled                TransferConfigStateEnum = "CANCELLED"
)

type TransferConfig struct {
	DataRefreshWindowDays   *int32                   `json:"dataRefreshWindowDays,omitempty"`
	DataSourceID            *string                  `json:"dataSourceId,omitempty"`
	DatasetRegion           *string                  `json:"datasetRegion,omitempty"`
	DestinationDatasetID    *string                  `json:"destinationDatasetId,omitempty"`
	Disabled                *bool                    `json:"disabled,omitempty"`
	DisplayName             *string                  `json:"displayName,omitempty"`
	EmailPreferences        *EmailPreferences        `json:"emailPreferences,omitempty"`
	Name                    *string                  `json:"name,omitempty"`
	NextRunTime             *string                  `json:"nextRunTime,omitempty"`
	NotificationPubsubTopic *string                  `json:"notificationPubsubTopic,omitempty"`
	OwnerInfo               *UserInfo                `json:"ownerInfo,omitempty"`
	Params                  map[string]interface{}   `json:"params,omitempty"`
	Schedule                *string                  `json:"schedule,omitempty"`
	ScheduleOptions         *ScheduleOptions         `json:"scheduleOptions,omitempty"`
	State                   *TransferConfigStateEnum `json:"state,omitempty"`
	UpdateTime              *string                  `json:"updateTime,omitempty"`
	UserID                  *string                  `json:"userId,omitempty"`
}
