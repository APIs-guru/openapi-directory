package shared




type NewDeviceEventManagementTypeEnum string

const (
    NewDeviceEventManagementTypeEnumManagedDevice NewDeviceEventManagementTypeEnum = "managedDevice"
NewDeviceEventManagementTypeEnumManagedProfile NewDeviceEventManagementTypeEnum = "managedProfile"
)


type NewDeviceEvent struct {
    DeviceID *string `json:"deviceId,omitempty"`
    DpcPackageName *string `json:"dpcPackageName,omitempty"`
    ManagementType *NewDeviceEventManagementTypeEnum `json:"managementType,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

