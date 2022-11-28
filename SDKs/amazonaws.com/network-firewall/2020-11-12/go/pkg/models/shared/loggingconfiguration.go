package shared

// LoggingConfiguration
// Defines how AWS Network Firewall performs logging for a <a>Firewall</a>.
type LoggingConfiguration struct {
	LogDestinationConfigs []LogDestinationConfig `json:"LogDestinationConfigs"`
}
