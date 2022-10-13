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
	DataRefreshWindowDays   *int32                   `json:"dataRefreshWindowDays"`
	DataSourceID            *string                  `json:"dataSourceId"`
	DatasetRegion           *string                  `json:"datasetRegion"`
	DestinationDatasetID    *string                  `json:"destinationDatasetId"`
	Disabled                *bool                    `json:"disabled"`
	DisplayName             *string                  `json:"displayName"`
	EmailPreferences        *EmailPreferences        `json:"emailPreferences"`
	Name                    *string                  `json:"name"`
	NextRunTime             *string                  `json:"nextRunTime"`
	NotificationPubsubTopic *string                  `json:"notificationPubsubTopic"`
	OwnerInfo               *UserInfo                `json:"ownerInfo"`
	Params                  map[string]interface{}   `json:"params"`
	Schedule                *string                  `json:"schedule"`
	ScheduleOptions         *ScheduleOptions         `json:"scheduleOptions"`
	State                   *TransferConfigStateEnum `json:"state"`
	UpdateTime              *string                  `json:"updateTime"`
	UserID                  *string                  `json:"userId"`
}
