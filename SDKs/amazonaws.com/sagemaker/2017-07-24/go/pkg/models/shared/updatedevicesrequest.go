package shared

type UpdateDevicesRequest struct {
	DeviceFleetName string   `json:"DeviceFleetName"`
	Devices         []Device `json:"Devices"`
}
