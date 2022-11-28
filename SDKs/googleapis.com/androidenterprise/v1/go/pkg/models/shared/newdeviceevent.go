package shared

type NewDeviceEventManagementTypeEnum string

const (
	NewDeviceEventManagementTypeEnumManagedDevice  NewDeviceEventManagementTypeEnum = "managedDevice"
	NewDeviceEventManagementTypeEnumManagedProfile NewDeviceEventManagementTypeEnum = "managedProfile"
)

// NewDeviceEvent
// An event generated when a new device is ready to be managed.
type NewDeviceEvent struct {
	DeviceID       *string                           `json:"deviceId,omitempty"`
	DpcPackageName *string                           `json:"dpcPackageName,omitempty"`
	ManagementType *NewDeviceEventManagementTypeEnum `json:"managementType,omitempty"`
	UserID         *string                           `json:"userId,omitempty"`
}
