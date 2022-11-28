package shared

// LoggingConfiguration
// Consists of the logging role and the log group name.
type LoggingConfiguration struct {
	LogGroupName *string `json:"LogGroupName,omitempty"`
	LoggingRole  *string `json:"LoggingRole,omitempty"`
}
