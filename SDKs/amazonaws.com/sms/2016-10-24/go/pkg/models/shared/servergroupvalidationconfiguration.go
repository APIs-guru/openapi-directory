package shared

// ServerGroupValidationConfiguration
// Configuration for validating an instance.
type ServerGroupValidationConfiguration struct {
	ServerGroupID                  *string                         `json:"serverGroupId,omitempty"`
	ServerValidationConfigurations []ServerValidationConfiguration `json:"serverValidationConfigurations,omitempty"`
}
