package shared

type PutAppValidationConfigurationRequest struct {
	AppID                               string                               `json:"appId"`
	AppValidationConfigurations         []AppValidationConfiguration         `json:"appValidationConfigurations"`
	ServerGroupValidationConfigurations []ServerGroupValidationConfiguration `json:"serverGroupValidationConfigurations"`
}
