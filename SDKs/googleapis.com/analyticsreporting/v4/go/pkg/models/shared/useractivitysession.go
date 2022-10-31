package shared



type UserActivitySession struct {
    Activities []Activity `json:"activities,omitempty"`
    DataSource *string `json:"dataSource,omitempty"`
    DeviceCategory *string `json:"deviceCategory,omitempty"`
    Platform *string `json:"platform,omitempty"`
    SessionDate *string `json:"sessionDate,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    
}

