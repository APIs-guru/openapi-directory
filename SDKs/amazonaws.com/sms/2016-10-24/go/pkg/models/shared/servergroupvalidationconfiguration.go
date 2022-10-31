package shared



type ServerGroupValidationConfiguration struct {
    ServerGroupID *string `json:"serverGroupId,omitempty"`
    ServerValidationConfigurations []ServerValidationConfiguration `json:"serverValidationConfigurations,omitempty"`
    
}

