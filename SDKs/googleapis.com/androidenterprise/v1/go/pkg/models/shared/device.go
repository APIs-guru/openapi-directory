package shared

type DeviceManagementTypeEnum string

const (
	DeviceManagementTypeEnumManagedDevice    DeviceManagementTypeEnum = "managedDevice"
	DeviceManagementTypeEnumManagedProfile   DeviceManagementTypeEnum = "managedProfile"
	DeviceManagementTypeEnumContainerApp     DeviceManagementTypeEnum = "containerApp"
	DeviceManagementTypeEnumUnmanagedProfile DeviceManagementTypeEnum = "unmanagedProfile"
)

type Device struct {
	AndroidID      *string                   `json:"androidId"`
	ManagementType *DeviceManagementTypeEnum `json:"managementType"`
	Policy         *Policy                   `json:"policy"`
	Report         *DeviceReport             `json:"report"`
}
