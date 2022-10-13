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

type Notification struct {
	AppRestrictionsSchemaChangeEvent *AppRestrictionsSchemaChangeEvent `json:"appRestrictionsSchemaChangeEvent"`
	AppUpdateEvent                   *AppUpdateEvent                   `json:"appUpdateEvent"`
	DeviceReportUpdateEvent          *DeviceReportUpdateEvent          `json:"deviceReportUpdateEvent"`
	EnterpriseID                     *string                           `json:"enterpriseId"`
	InstallFailureEvent              *InstallFailureEvent              `json:"installFailureEvent"`
	NewDeviceEvent                   *NewDeviceEvent                   `json:"newDeviceEvent"`
	NewPermissionsEvent              *NewPermissionsEvent              `json:"newPermissionsEvent"`
	NotificationType                 *NotificationNotificationTypeEnum `json:"notificationType"`
	ProductApprovalEvent             *ProductApprovalEvent             `json:"productApprovalEvent"`
	ProductAvailabilityChangeEvent   *ProductAvailabilityChangeEvent   `json:"productAvailabilityChangeEvent"`
	TimestampMillis                  *string                           `json:"timestampMillis"`
}
