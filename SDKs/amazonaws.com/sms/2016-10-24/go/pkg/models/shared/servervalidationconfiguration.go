package shared

// ServerValidationConfiguration
// Configuration for validating an instance.
type ServerValidationConfiguration struct {
	Name                         *string                       `json:"name,omitempty"`
	Server                       *Server                       `json:"server,omitempty"`
	ServerValidationStrategy     *ServerValidationStrategyEnum `json:"serverValidationStrategy,omitempty"`
	UserDataValidationParameters *UserDataValidationParameters `json:"userDataValidationParameters,omitempty"`
	ValidationID                 *string                       `json:"validationId,omitempty"`
}
