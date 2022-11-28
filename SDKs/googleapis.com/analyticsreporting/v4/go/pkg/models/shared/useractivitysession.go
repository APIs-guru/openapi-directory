package shared

// UserActivitySession
// This represents a user session performed on a specific device at a certain time over a period of time.
type UserActivitySession struct {
	Activities     []Activity `json:"activities,omitempty"`
	DataSource     *string    `json:"dataSource,omitempty"`
	DeviceCategory *string    `json:"deviceCategory,omitempty"`
	Platform       *string    `json:"platform,omitempty"`
	SessionDate    *string    `json:"sessionDate,omitempty"`
	SessionID      *string    `json:"sessionId,omitempty"`
}
