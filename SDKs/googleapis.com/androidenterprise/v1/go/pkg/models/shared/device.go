package shared

type DeviceManagementTypeEnum string

const (
	DeviceManagementTypeEnumManagedDevice    DeviceManagementTypeEnum = "managedDevice"
	DeviceManagementTypeEnumManagedProfile   DeviceManagementTypeEnum = "managedProfile"
	DeviceManagementTypeEnumContainerApp     DeviceManagementTypeEnum = "containerApp"
	DeviceManagementTypeEnumUnmanagedProfile DeviceManagementTypeEnum = "unmanagedProfile"
)

type Device struct {
	AndroidID      *string                   `json:"androidId,omitempty"`
	ManagementType *DeviceManagementTypeEnum `json:"managementType,omitempty"`
	Policy         *Policy                   `json:"policy,omitempty"`
	Report         *DeviceReport             `json:"report,omitempty"`
}
