package shared

type DeviceManagementTypeEnum string

const (
	DeviceManagementTypeEnumManagedDevice    DeviceManagementTypeEnum = "managedDevice"
	DeviceManagementTypeEnumManagedProfile   DeviceManagementTypeEnum = "managedProfile"
	DeviceManagementTypeEnumContainerApp     DeviceManagementTypeEnum = "containerApp"
	DeviceManagementTypeEnumUnmanagedProfile DeviceManagementTypeEnum = "unmanagedProfile"
)

// Device
// A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
type Device struct {
	AndroidID      *string                   `json:"androidId,omitempty"`
	ManagementType *DeviceManagementTypeEnum `json:"managementType,omitempty"`
	Policy         *Policy                   `json:"policy,omitempty"`
	Report         *DeviceReport             `json:"report,omitempty"`
}
