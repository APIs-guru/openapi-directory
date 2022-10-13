package shared

type UserActivitySession struct {
	Activities     []Activity `json:"activities"`
	DataSource     *string    `json:"dataSource"`
	DeviceCategory *string    `json:"deviceCategory"`
	Platform       *string    `json:"platform"`
	SessionDate    *string    `json:"sessionDate"`
	SessionID      *string    `json:"sessionId"`
}
