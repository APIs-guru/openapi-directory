package shared

type UpdateApplicationMaintenanceConfigurationResponse struct {
	ApplicationArn                                 *string                                         `json:"ApplicationARN"`
	ApplicationMaintenanceConfigurationDescription *ApplicationMaintenanceConfigurationDescription `json:"ApplicationMaintenanceConfigurationDescription"`
}
