package shared

// ApplicationMaintenanceConfigurationDescription
// The details of the maintenance configuration for the application.
type ApplicationMaintenanceConfigurationDescription struct {
	ApplicationMaintenanceWindowEndTime   string `json:"ApplicationMaintenanceWindowEndTime"`
	ApplicationMaintenanceWindowStartTime string `json:"ApplicationMaintenanceWindowStartTime"`
}
