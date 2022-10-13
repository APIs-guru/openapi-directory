package shared

type NewDeviceEventManagementTypeEnum string

const (
	NewDeviceEventManagementTypeEnumManagedDevice  NewDeviceEventManagementTypeEnum = "managedDevice"
	NewDeviceEventManagementTypeEnumManagedProfile NewDeviceEventManagementTypeEnum = "managedProfile"
)

type NewDeviceEvent struct {
	DeviceID       *string                           `json:"deviceId"`
	DpcPackageName *string                           `json:"dpcPackageName"`
	ManagementType *NewDeviceEventManagementTypeEnum `json:"managementType"`
	UserID         *string                           `json:"userId"`
}
