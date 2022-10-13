package shared

type ServerGroupValidationConfiguration struct {
	ServerGroupID                  *string                         `json:"serverGroupId"`
	ServerValidationConfigurations []ServerValidationConfiguration `json:"serverValidationConfigurations"`
}
