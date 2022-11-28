package shared

// DeviceReportUpdateEvent
// An event generated when an updated device report is available.
type DeviceReportUpdateEvent struct {
	DeviceID *string       `json:"deviceId,omitempty"`
	Report   *DeviceReport `json:"report,omitempty"`
	UserID   *string       `json:"userId,omitempty"`
}
