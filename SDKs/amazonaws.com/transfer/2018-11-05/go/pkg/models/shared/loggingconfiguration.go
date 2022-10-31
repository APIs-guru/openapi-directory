package shared

type LoggingConfiguration struct {
	LogGroupName *string `json:"LogGroupName,omitempty"`
	LoggingRole  *string `json:"LoggingRole,omitempty"`
}
