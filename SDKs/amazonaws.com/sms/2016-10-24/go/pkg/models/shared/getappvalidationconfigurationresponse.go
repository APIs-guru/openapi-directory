package shared

type GetAppValidationConfigurationResponse struct {
	AppValidationConfigurations         []AppValidationConfiguration         `json:"appValidationConfigurations"`
	ServerGroupValidationConfigurations []ServerGroupValidationConfiguration `json:"serverGroupValidationConfigurations"`
}
