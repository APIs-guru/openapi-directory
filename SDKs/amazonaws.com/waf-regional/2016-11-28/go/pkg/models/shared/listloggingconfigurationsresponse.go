package shared

type ListLoggingConfigurationsResponse struct {
	LoggingConfigurations []LoggingConfiguration `json:"LoggingConfigurations"`
	NextMarker            *string                `json:"NextMarker"`
}
