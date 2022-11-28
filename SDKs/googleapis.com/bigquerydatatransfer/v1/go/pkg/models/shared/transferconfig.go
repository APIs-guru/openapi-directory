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

// TransferConfigInput
// Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
type TransferConfigInput struct {
	DataRefreshWindowDays   *int32                 `json:"dataRefreshWindowDays,omitempty"`
	DataSourceID            *string                `json:"dataSourceId,omitempty"`
	DestinationDatasetID    *string                `json:"destinationDatasetId,omitempty"`
	Disabled                *bool                  `json:"disabled,omitempty"`
	DisplayName             *string                `json:"displayName,omitempty"`
	EmailPreferences        *EmailPreferences      `json:"emailPreferences,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	NotificationPubsubTopic *string                `json:"notificationPubsubTopic,omitempty"`
	OwnerInfo               *UserInfo              `json:"ownerInfo,omitempty"`
	Params                  map[string]interface{} `json:"params,omitempty"`
	Schedule                *string                `json:"schedule,omitempty"`
	ScheduleOptions         *ScheduleOptions       `json:"scheduleOptions,omitempty"`
	UserID                  *string                `json:"userId,omitempty"`
}

// TransferConfig
// Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
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
