package shared

type DeviceReportUpdateEvent struct {
	DeviceID *string       `json:"deviceId"`
	Report   *DeviceReport `json:"report"`
	UserID   *string       `json:"userId"`
}
