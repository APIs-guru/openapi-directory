package shared

type MaintenanceStatusConnectionServices struct {
	Name   string `json:"name"`
	Number int64  `json:"number"`
}

type MaintenanceStatus struct {
	ConnectionServices []MaintenanceStatusConnectionServices `json:"connection_services"`
	ScheduledTime      *string                               `json:"scheduled_time"`
	Status             *string                               `json:"status"`
}
