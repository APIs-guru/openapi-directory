package shared

type DeviceReportUpdateEvent struct {
	DeviceID *string       `json:"deviceId,omitempty"`
	Report   *DeviceReport `json:"report,omitempty"`
	UserID   *string       `json:"userId,omitempty"`
}
