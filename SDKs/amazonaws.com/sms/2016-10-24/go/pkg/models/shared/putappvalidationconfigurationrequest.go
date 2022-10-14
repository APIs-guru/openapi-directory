package shared

type PutAppValidationConfigurationRequest struct {
	AppID                               string                               `json:"appId"`
	AppValidationConfigurations         []AppValidationConfiguration         `json:"appValidationConfigurations,omitempty"`
	ServerGroupValidationConfigurations []ServerGroupValidationConfiguration `json:"serverGroupValidationConfigurations,omitempty"`
}
