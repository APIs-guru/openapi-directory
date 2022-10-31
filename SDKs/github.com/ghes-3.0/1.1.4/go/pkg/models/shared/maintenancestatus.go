package shared



type MaintenanceStatusConnectionServices struct {
    Name string `json:"name"`
    Number int64 `json:"number"`
    
}

type MaintenanceStatus struct {
    ConnectionServices []MaintenanceStatusConnectionServices `json:"connection_services,omitempty"`
    ScheduledTime *string `json:"scheduled_time,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

