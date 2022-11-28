package shared

type NotificationNotificationTypeEnum string

const (
	NotificationNotificationTypeEnumUnknown                    NotificationNotificationTypeEnum = "unknown"
	NotificationNotificationTypeEnumTestNotification           NotificationNotificationTypeEnum = "testNotification"
	NotificationNotificationTypeEnumProductApproval            NotificationNotificationTypeEnum = "productApproval"
	NotificationNotificationTypeEnumInstallFailure             NotificationNotificationTypeEnum = "installFailure"
	NotificationNotificationTypeEnumAppUpdate                  NotificationNotificationTypeEnum = "appUpdate"
	NotificationNotificationTypeEnumNewPermissions             NotificationNotificationTypeEnum = "newPermissions"
	NotificationNotificationTypeEnumAppRestricionsSchemaChange NotificationNotificationTypeEnum = "appRestricionsSchemaChange"
	NotificationNotificationTypeEnumProductAvailabilityChange  NotificationNotificationTypeEnum = "productAvailabilityChange"
	NotificationNotificationTypeEnumNewDevice                  NotificationNotificationTypeEnum = "newDevice"
	NotificationNotificationTypeEnumDeviceReportUpdate         NotificationNotificationTypeEnum = "deviceReportUpdate"
)

// Notification
// A notification of one event relating to an enterprise.
type Notification struct {
	AppRestrictionsSchemaChangeEvent *AppRestrictionsSchemaChangeEvent `json:"appRestrictionsSchemaChangeEvent,omitempty"`
	AppUpdateEvent                   *AppUpdateEvent                   `json:"appUpdateEvent,omitempty"`
	DeviceReportUpdateEvent          *DeviceReportUpdateEvent          `json:"deviceReportUpdateEvent,omitempty"`
	EnterpriseID                     *string                           `json:"enterpriseId,omitempty"`
	InstallFailureEvent              *InstallFailureEvent              `json:"installFailureEvent,omitempty"`
	NewDeviceEvent                   *NewDeviceEvent                   `json:"newDeviceEvent,omitempty"`
	NewPermissionsEvent              *NewPermissionsEvent              `json:"newPermissionsEvent,omitempty"`
	NotificationType                 *NotificationNotificationTypeEnum `json:"notificationType,omitempty"`
	ProductApprovalEvent             *ProductApprovalEvent             `json:"productApprovalEvent,omitempty"`
	ProductAvailabilityChangeEvent   *ProductAvailabilityChangeEvent   `json:"productAvailabilityChangeEvent,omitempty"`
	TimestampMillis                  *string                           `json:"timestampMillis,omitempty"`
}
