package shared



type GetAppValidationConfigurationResponse struct {
    AppValidationConfigurations []AppValidationConfiguration `json:"appValidationConfigurations,omitempty"`
    ServerGroupValidationConfigurations []ServerGroupValidationConfiguration `json:"serverGroupValidationConfigurations,omitempty"`
    
}

